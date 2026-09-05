// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract LogisticsEscrow {
    address payable public owner;
    uint256 public agreementCount;
    uint256 public accumulatedFees;

    enum Status { Waiting, InProcess, Completed, Refunded, Cancelled }

    struct Agreement {
        address payable shipper;
        address payable carrier;
        uint256 totalAmount;
        uint256 remainingAmount;
        uint256 currentMilestone; // Financial milestone (Shipper releases payout)
        uint256 trackingStage;    // Operational tracking stage (Carrier updates: 0%, 30%, 70%,  100%)
        uint256 deadline;
        Status status;
        string deliveryAddress;
        string parcelSize;
        string parcelWeight;
        string transportType;
    }

    mapping(uint256 => Agreement) public agreements;

    event AgreementCreated(uint256 indexed id, address indexed shipper, address indexed carrier, uint256 amount);
    event AgreementAccepted(uint256 indexed id, address indexed carrier);
    event TrackingUpdated(uint256 indexed id, uint256 stage);
    event PayoutReleased(uint256 indexed id, uint256 amountReleased, uint256 feePaid);
    event OrderRefunded(uint256 indexed id, uint256 amountRefunded);
    event OrderCancelled(uint256 indexed id);
    event PlatformFeesWithdrawn(address indexed admin, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner authorized");
        _;
    }

    modifier notOwner() {
        require(msg.sender != owner, "Owner cannot perform this action");
        _;
    }

    constructor() {
        owner = payable(msg.sender);
    }

    // 1. Shipper creates agreement with 100% funds locked
    function createAgreement(
        address payable _carrier,
        uint256 _durationMinutes,
        string memory _deliveryAddress,
        string memory _parcelSize,
        string memory _parcelWeight,
        string memory _transportType
    ) external payable notOwner {
        require(msg.value > 0, "Deposit must be > 0");
        require(_durationMinutes > 0, "Duration must be positive");
        require(bytes(_deliveryAddress).length > 0, "Delivery address required");

        if (_carrier != address(0)) {
            require(_carrier != msg.sender, "Shipper cannot assign self as carrier");
            require(_carrier != owner, "Admin cannot be assigned as carrier");
        }

        agreementCount++;
        agreements[agreementCount] = Agreement({
            shipper: payable(msg.sender),
            carrier: _carrier,
            totalAmount: msg.value,
            remainingAmount: msg.value,
            currentMilestone: 0,
            trackingStage: 0,
            deadline: block.timestamp + (_durationMinutes * 1 minutes),
            status: _carrier == address(0) ? Status.Waiting : Status.InProcess,
            deliveryAddress: _deliveryAddress,
            parcelSize: _parcelSize,
            parcelWeight: _parcelWeight,
            transportType: _transportType
        });

        emit AgreementCreated(agreementCount, msg.sender, _carrier, msg.value);
    }

    // 2. Carrier accepts open marketplace order
    function acceptAgreement(uint256 _id) external notOwner {
        Agreement storage ag = agreements[_id];
        require(ag.status == Status.Waiting, "Order not open for acceptance");
        require(ag.shipper != msg.sender, "Shipper cannot accept own order");

        ag.carrier = payable(msg.sender);
        ag.status = Status.InProcess;

        emit AgreementAccepted(_id, msg.sender);
    }

    // 3. Carrier updates delivery tracking stage (30%, 60%, 80%, 100%)
    function updateTrackingStage(uint256 _id, uint256 _stage) external {
        Agreement storage ag = agreements[_id];
        require(msg.sender == ag.carrier, "Only assigned carrier can update tracking");
        require(ag.status == Status.InProcess, "Agreement must be InProcess");
        require(_stage > ag.trackingStage && _stage <= 100, "Invalid stage progress");

        ag.trackingStage = _stage;
        emit TrackingUpdated(_id, _stage);
    }

    // 4. Shipper releases payment (deducts 1% platform fee)
    function releasePayout(uint256 _id, uint256 _percentage) external notOwner {
        Agreement storage ag = agreements[_id];
        require(msg.sender == ag.shipper, "Only shipper can release payment");
        require(ag.status == Status.InProcess, "Agreement not in process");
        require(_percentage > ag.currentMilestone && _percentage <= 100, "Percentage must exceed current milestone");

        uint256 incrementalPercent = _percentage - ag.currentMilestone;
        uint256 payoutChunk = (ag.totalAmount * incrementalPercent) / 100;
        if (payoutChunk > ag.remainingAmount) {
            payoutChunk = ag.remainingAmount;
        }

        uint256 fee = payoutChunk / 100; // 1% Protocol Fee
        uint256 carrierAmount = payoutChunk - fee;

        ag.currentMilestone = _percentage;
        ag.remainingAmount -= payoutChunk;
        accumulatedFees += fee;

        if (ag.remainingAmount == 0 || _percentage == 100) {
            ag.status = Status.Completed;
        }

        (bool sent, ) = ag.carrier.call{value: carrierAmount}("");
        require(sent, "Failed to send Ether to carrier");
        emit PayoutReleased(_id, carrierAmount, fee);
    }

    // 5. Shipper claims refund on expiration
    function claimRefund(uint256 _id) external notOwner {
        Agreement storage ag = agreements[_id];
        require(msg.sender == ag.shipper, "Only shipper can claim refund");
        require(ag.status == Status.InProcess || ag.status == Status.Waiting, "Cannot refund completed/closed agreement");
        require(block.timestamp >= ag.deadline, "Agreement deadline has not expired yet");
        require(ag.remainingAmount > 0, "No remaining funds to refund");

        uint256 refundAmount = ag.remainingAmount;
        ag.remainingAmount = 0;
        ag.status = Status.Refunded;

        (bool sent, ) = ag.shipper.call{value: refundAmount}("");
        require(sent, "Failed to refund Ether to shipper");
        emit OrderRefunded(_id, refundAmount);
    }

    // 6. Shipper cancels open unassigned agreement
    function cancelAgreement(uint256 _id) external notOwner {
        Agreement storage ag = agreements[_id];
        require(msg.sender == ag.shipper, "Only shipper can cancel");
        require(ag.status == Status.Waiting, "Cannot cancel accepted agreement");
        require(ag.remainingAmount > 0, "No funds to cancel");

        uint256 refundAmount = ag.remainingAmount;
        ag.remainingAmount = 0;
        ag.status = Status.Cancelled;

        (bool sent, ) = ag.shipper.call{value: refundAmount}("");
        require(sent, "Failed to refund Ether to shipper");
    }

    // 7. Admin withdraws platform fees
    function withdrawPlatformFees() external onlyOwner {
        require(accumulatedFees > 0, "No platform fees available");
        uint256 amount = accumulatedFees;
        accumulatedFees = 0;
        (bool sent, ) = owner.call{value: amount}("");
        require(sent, "Failed to withdraw platform fees");
        emit PlatformFeesWithdrawn(owner, amount);
    }
}