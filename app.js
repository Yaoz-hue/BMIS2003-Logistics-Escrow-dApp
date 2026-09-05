// =============================================================================
// GLOBAL CONFIGURATION & WEB3 STATE
// =============================================================================
const contractAddress = "0xfd6456465d084Cc3A5AdAc950CC0e4BCbCF8e269"; 

const contractABI = 
[
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "acceptAgreement",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "carrier",
        "type": "address"
      }
    ],
    "name": "AgreementAccepted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "shipper",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "carrier",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "AgreementCreated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "cancelAgreement",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "claimRefund",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_carrier",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_durationMinutes",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_deliveryAddress",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_parcelSize",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_parcelWeight",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_transportType",
        "type": "string"
      }
    ],
    "name": "createAgreement",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "OrderCancelled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountRefunded",
        "type": "uint256"
      }
    ],
    "name": "OrderRefunded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountReleased",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "feePaid",
        "type": "uint256"
      }
    ],
    "name": "PayoutReleased",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "admin",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "PlatformFeesWithdrawn",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_percentage",
        "type": "uint256"
      }
    ],
    "name": "releasePayout",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "stage",
        "type": "uint256"
      }
    ],
    "name": "TrackingUpdated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_stage",
        "type": "uint256"
      }
    ],
    "name": "updateTrackingStage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawPlatformFees",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "accumulatedFees",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "agreementCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "agreements",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "shipper",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "carrier",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "totalAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "remainingAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "currentMilestone",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "trackingStage",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "internalType": "enum LogisticsEscrow.Status",
        "name": "status",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "deliveryAddress",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "parcelSize",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "parcelWeight",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "transportType",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]


let provider;
let signer;
let contract;
let currentAccount = null;
let ownerAddress = null;
const currentEthMyrRate = 13500.00;

const STATUS_BADGES = {
  0: `<span class="badge bg-warning text-dark">Waiting for Carrier</span>`,
  1: `<span class="badge bg-primary">In Process</span>`,
  2: `<span class="badge bg-success">Completed</span>`,
  3: `<span class="badge bg-danger">Refunded</span>`,
  4: `<span class="badge bg-secondary">Cancelled</span>`
};

// =============================================================================
// WALLET LIFECYCLE & METAMASK EVENTS
// =============================================================================
async function connectWallet() {
  if (!window.ethereum) return alert("Please install MetaMask!");
  try {
   
    await window.ethereum.request({
      method: "wallet_requestPermissions",
      params: [{ eth_accounts: {} }]
    });

    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    if (accounts.length > 0) {
      setupAccountSession(accounts[0]);
    }
  } catch (e) {
    if (e.code !== 4001) { 
      alert("Connection failed: " + (e.message || e));
    }
  }
}

function disconnectWallet() {
  currentAccount = null;
  signer = null;
  contract = null;
   
   clearManageInputs();
  document.getElementById("walletAddress").innerHTML = `<i class="fa-solid fa-circle-dot text-danger me-1"></i> Disconnected`;
  document.getElementById("connectWalletBtn").classList.remove("d-none");
  document.getElementById("disconnectWalletBtn").classList.add("d-none");

  // Restore regular view visibility on disconnect
  document.getElementById("tab-shipper-li")?.classList.remove("d-none");
  document.getElementById("tab-carrier-li")?.classList.remove("d-none");
  document.getElementById("tab-deliveries-li")?.classList.remove("d-none");
  document.getElementById("tab-admin-container")?.classList.add("d-none");

  const historyTabLabel = document.getElementById("historyTabLabel");
  if (historyTabLabel) historyTabLabel.innerText = "Private Transaction History";

  // Reset all table views
  document.getElementById("shipperCreatedTable").innerHTML = `<tr><td colspan="6" class="text-center text-secondary py-3">Connect wallet to view agreements.</td></tr>`;
  document.getElementById("marketplaceTable").innerHTML = `<tr><td colspan="5" class="text-center text-secondary py-3">Connect wallet to load marketplace orders.</td></tr>`;
  document.getElementById("myWaitingTable").innerHTML = `<tr><td colspan="6" class="text-center text-secondary py-3">No open orders found.</td></tr>`;
  document.getElementById("carrierAcceptedTable").innerHTML = `<tr><td colspan="7" class="text-center text-secondary py-3">No accepted delivery jobs found.</td></tr>`;
  document.getElementById("transactionHistoryTable").innerHTML = `<tr><td colspan="8" class="text-center text-secondary py-3">Connect wallet to view transactions.</td></tr>`;

  switchView("shipper");
}

async function setupAccountSession(accountAddress) {
  currentAccount = accountAddress;
  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();
  contract = new ethers.Contract(contractAddress, contractABI, signer);

  ownerAddress = await contract.owner();

  const shortAddress = `${accountAddress.substring(0, 6)}...${accountAddress.substring(accountAddress.length - 4)}`;
  document.getElementById("walletAddress").innerHTML = `<i class="fa-solid fa-circle-dot text-success me-1"></i> ${shortAddress}`;
  document.getElementById("connectWalletBtn").classList.add("d-none");
  document.getElementById("disconnectWalletBtn").classList.remove("d-none");

  configureRoleView();
}


// -----------------------------------------------------------------------------
// Role-Based UI Isolation (Admin vs Regular Participants)
// -----------------------------------------------------------------------------
function checkAdminRole() {
  const isAdmin = ownerAddress && currentAccount && ownerAddress.toLowerCase() === currentAccount.toLowerCase();

  const shipperTab = document.getElementById("tab-shipper-li");
  const carrierTab = document.getElementById("tab-carrier-li");
  const deliveriesTab = document.getElementById("tab-deliveries-li");
  const adminTab = document.getElementById("tab-admin-container");
  const historyTabLabel = document.getElementById("historyTabLabel");
  const historyViewTitle = document.getElementById("historyViewTitle");

  if (isAdmin) {
    // 1. Admin Mode: Hide all regular marketplace views
    if (shipperTab) shipperTab.classList.add("d-none");
    if (carrierTab) carrierTab.classList.add("d-none");
    if (deliveriesTab) deliveriesTab.classList.add("d-none");

    // 2. Show Admin Vault & Update Ledger Label to Public/Global
    if (adminTab) adminTab.classList.remove("d-none");
    if (historyTabLabel) historyTabLabel.innerText = "Public Transaction History";
    if (historyViewTitle) {
      historyViewTitle.innerHTML = `<i class="fa-solid fa-shield-halved me-2 text-warning"></i> Global Transaction Ledger`;
    }

    // 3. Automatically route Admin directly to the Public Ledger or Admin Vault
    switchView("history");
  } else {
    // Regular User Mode: Restore all standard views
    if (shipperTab) shipperTab.classList.remove("d-none");
    if (carrierTab) carrierTab.classList.remove("d-none");
    if (deliveriesTab) deliveriesTab.classList.remove("d-none");

    // Hide Admin Vault & restore Private label
    if (adminTab) adminTab.classList.add("d-none");
    if (historyTabLabel) historyTabLabel.innerText = "Private Transaction History";
    if (historyViewTitle) {
      historyViewTitle.innerHTML = `<i class="fa-solid fa-clock-rotate-left me-2 text-primary"></i> Private Transaction History`;
    }

    // If previously in Admin Vault view, redirect back to Shipper View
    const adminView = document.getElementById("view-admin");
    if (adminView && !adminView.classList.contains("d-none")) {
      switchView("shipper");
    }
  }
}

// Auto-detect Account Switch or Disconnect in MetaMask
if (window.ethereum) {
  window.ethereum.on('accountsChanged', async function (accounts) {
    if (accounts.length === 0) {
      disconnectWallet();
    } else {
      currentAccount = accounts[0];
      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();

      if (contractAddress && contractAddress !== "0xYourDeployedContractAddressHere") {
        contract = new ethers.Contract(contractAddress, contractABI, signer);
        ownerAddress = await contract.owner();
      }

      const shortAddr = `${currentAccount.substring(0, 6)}...${currentAccount.substring(38)}`;
      document.getElementById("walletAddress").innerHTML = `<i class="fa-solid fa-circle-dot text-success me-1"></i> ${shortAddr}`;

      checkAdminRole();
      refreshCurrentViewData();
    }
  });

  window.ethereum.on('chainChanged', function () {
    window.location.reload();
  });
}

// =============================================================================
// TAB NAVIGATION & VIEW CONTROLLER
// =============================================================================
function switchView(viewName) {
  const views = ['shipper', 'carrier', 'deliveries', 'history', 'admin'];
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    const btn = document.getElementById(`tab-${v}`);
    if (el) el.classList.add('d-none');
    if (btn) btn.classList.remove('active');
  });

  const targetView = document.getElementById(`view-${viewName}`);
  const targetBtn = document.getElementById(`tab-${viewName}`);
  if (targetView) targetView.classList.remove('d-none');
  if (targetBtn) targetBtn.classList.add('active');

  refreshCurrentViewData();
}

function refreshCurrentViewData() {
  loadShipperCreatedAgreements();
  loadMarketplaceContracts();
  loadMyWaitingContracts();
  loadCarrierAcceptedContracts();
  loadTransactionHistory();
}

function updateDepositMyrEstimate() {
  const val = parseFloat(document.getElementById("depositAmount").value) || 0;
  const myr = (val * currentEthMyrRate).toFixed(2);
  document.getElementById("depositMyrEstimate").innerText = `≈ RM ${myr} MYR`;
}

// =============================================================================
// SMART CONTRACT INTERACTIONS: SHIPPER ACTIONS
// =============================================================================
async function createAgreement() {
  if (!contract) return alert("Please connect your wallet first.");

  const destination = document.getElementById("deliveryAddress").value.trim();
  const parcelSize = document.getElementById("parcelSize").value;
  const parcelWeight = document.getElementById("parcelWeight").value;
  const transportType = document.getElementById("transportType").value;
  const carrier = document.getElementById("carrierAddress").value.trim() || ethers.constants.AddressZero;

  const days = parseInt(document.getElementById("durationDays").value) || 0;
  const hours = parseInt(document.getElementById("durationHours").value) || 0;
  const mins = parseInt(document.getElementById("durationMins").value) || 0;
  const totalMinutes = (days * 1440) + (hours * 60) + mins;

  const depositEth = document.getElementById("depositAmount").value;

  if (!destination) return alert("Delivery destination address is required.");
  if (totalMinutes <= 0) return alert("Please specify a duration greater than 0 minutes.");
  if (!depositEth || parseFloat(depositEth) <= 0) return alert("Please enter a valid deposit amount.");

  try {
    const valueWei = ethers.utils.parseEther(depositEth);
    const tx = await contract.createAgreement(
      carrier,
      totalMinutes,
      destination,
      parcelSize,
      parcelWeight,
      transportType,
      { value: valueWei }
    );
    alert("Creating agreement and locking escrow funds...");
    await tx.wait();
    alert("Agreement created successfully!");

    document.getElementById("deliveryAddress").value = "";
    document.getElementById("carrierAddress").value = "";
    document.getElementById("durationDays").value = "";
    document.getElementById("durationHours").value = "";
    document.getElementById("durationMins").value = "";
    document.getElementById("depositAmount").value = "";
    updateDepositMyrEstimate();

    refreshCurrentViewData();
  } catch (err) {
    alert("Transaction failed: " + (err.reason || err.message || err));
  }
}

async function releasePayout() {
  // Gracefully fallback across common element ID naming variants
  const idInput = document.getElementById("payoutId") || 
                  document.getElementById("agreementId") || 
                  document.getElementById("manageAgreementId") ||
                  document.getElementById("manageId");
                  
  const percentInput = document.getElementById("payoutPercent") ||
                       document.getElementById("milestonePercent") ||
                       document.getElementById("releasePercentage");

  const id = idInput ? idInput.value.trim() : "";
  const percentVal = percentInput ? percentInput.value.trim() : "";

  // 1. Client-side input validation: Missing Agreement ID
  if (!id) {
    alert("Please enter a valid Agreement ID.");
    return;
  }

  // 2. Client-side input validation: Missing or out-of-bounds percentage
  if (!percentVal || isNaN(percentVal) || Number(percentVal) <= 0 || Number(percentVal) > 100) {
    alert("Please specify a valid Milestone Payout Percentage between 1% and 100%.");
    return;
  }

  const percentage = parseInt(percentVal, 10);

  try {
    // 3. Pre-flight on-chain verification
    const ag = await contract.agreements(id);
    if (ag.shipper.toLowerCase() !== currentAccount.toLowerCase()) {
      alert("Unauthorized: Only the Shipper who created this agreement can release payouts.");
      return;
    }
    if (ag.status !== 1) { // 1 = InProcess
      alert("Payout failed: Agreement is not in active transit (InProcess).");
      return;
    }
    if (percentage <= ag.currentMilestone.toNumber()) {
      alert(`Invalid percentage: New milestone must be higher than current released progress (${ag.currentMilestone}%).`);
      return;
    }

    const tx = await contract.releasePayout(id, percentage);
    alert(`Transaction broadcasted! Releasing ${percentage}% payout. Awaiting confirmation...`);
    await tx.wait();
    alert(`Success: ${percentage}% payout successfully released to Carrier!`);
    clearManageInputs();
    
    // Reset percentage input and refresh active view tables
    if (percentInput) percentInput.value = "";
    refreshCurrentViewData();
  } catch (err) {
    console.error("Release Payout Error:", err);
    parseContractError(err, "Release payout failed");
  }
}

async function claimRefund() {
  // Gracefully fallback across common element ID naming variants
  const idInput = document.getElementById("payoutId") || 
                  document.getElementById("agreementId") || 
                  document.getElementById("manageAgreementId") ||
                  document.getElementById("manageId");
                  
  const id = idInput ? idInput.value.trim() : "";

  // 1. Client-side input validation: Missing Agreement ID
  if (!id) {
    alert("Please enter the Agreement ID you want to refund.");
    return;
  }

  try {
    // 2. Fetch on-chain agreement state for pre-validation
    const ag = await contract.agreements(id);

    if (ag.shipper.toLowerCase() !== currentAccount.toLowerCase()) {
      alert("Unauthorized: Only the Shipper who created this agreement can claim a refund.");
      return;
    }

    if (ag.remainingAmount.isZero()) {
      alert("Refund unavailable: No remaining escrow funds locked in this agreement.");
      return;
    }

    // 3. Temporal verification: Verify delivery horizon expiration
    const currentBlockTime = Math.floor(Date.now() / 1000);
    const deadlineTime = ag.deadline.toNumber();

    if (currentBlockTime < deadlineTime) {
      const remainingSec = deadlineTime - currentBlockTime;
      const mins = Math.floor(remainingSec / 60);
      const secs = remainingSec % 60;
      alert(`Refund locked: Delivery horizon has NOT expired yet.\nPlease wait ${mins}m ${secs}s until the deadline passes.`);
      return;
    }

    const tx = await contract.claimRefund(id);
    alert("Transaction broadcasted! Claiming escrow refund...");
    await tx.wait();
    alert("Success: Remaining escrow funds successfully refunded to your wallet!");
    clearManageInputs();
    
    refreshCurrentViewData();
  } catch (err) {
    console.error("Claim Refund Error:", err);
    parseContractError(err, "Refund failed");
  }
}

async function cancelAgreement(id) {
  if (!contract) return alert("Please connect your wallet first.");
  if (!confirm(`Cancel Agreement #${id}? Escrow will be returned in full.`)) return;

  try {
    const tx = await contract.cancelAgreement(id);
    alert("Cancelling agreement...");
    await tx.wait();
    alert("Agreement cancelled!");
    refreshCurrentViewData();
  } catch (err) {
    alert("Cancellation failed: " + (err.reason || err.message || err));
  }
}

// =============================================================================
// SMART CONTRACT INTERACTIONS: CARRIER ACTIONS
// =============================================================================
async function acceptAgreement(id) {
  if (!contract) return alert("Please connect your wallet first.");

  try {
    const tx = await contract.acceptAgreement(id);
    alert(`Accepting job #${id}...`);
    await tx.wait();
    alert("Job accepted! Head to 'My Deliveries' to update progress.");
    refreshCurrentViewData();
  } catch (err) {
    alert("Job acceptance failed: " + (err.reason || err.message || err));
  }
}

function openTrackingModal(id, currentStage) {
  document.getElementById("trackingAgreementId").value = id;
  document.getElementById("trackingModalTitle").innerText = `Update Stage for #${id}`;
  
  const select = document.getElementById("trackingStageSelect");
  for (let i = 0; i < select.options.length; i++) {
    select.options[i].disabled = parseInt(select.options[i].value) <= currentStage;
  }
  for (let i = 0; i < select.options.length; i++) {
    if (!select.options[i].disabled) {
      select.selectedIndex = i;
      break;
    }
  }

  new bootstrap.Modal(document.getElementById("updateTrackingModal")).show();
}

async function submitTrackingStage() {
  const id = document.getElementById("trackingAgreementId").value;
  const stage = parseInt(document.getElementById("trackingStageSelect").value);

  if (!contract) return alert("Wallet not connected!");

  try {
    const tx = await contract.updateTrackingStage(id, stage);
    alert(`Broadcasting milestone stage ${stage}% to smart contract...`);
    await tx.wait();
    alert(`Tracking stage updated to ${stage}%!`);

    const modalEl = document.getElementById("updateTrackingModal");
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) modalInstance.hide();

    refreshCurrentViewData();
  } catch (err) {
    alert("Tracking update failed: " + (err.reason || err.message || err));
  }
}

// =============================================================================
// DATA LOADERS & DOM RENDERING
// =============================================================================
async function loadShipperCreatedAgreements() {
  if (!contract || !currentAccount) return;
  const table = document.getElementById("shipperCreatedTable");
  if (!table) return;

  try {
    const count = (await contract.agreementCount()).toNumber();
    let rows = "";
    let activeFound = 0;

    for (let i = count; i >= 1; i--) {
      const ag = await contract.agreements(i);
      if (ag.shipper.toLowerCase() === currentAccount.toLowerCase()) {
        
        // Skip terminal orders (Completed, Refunded, Cancelled)
        if (ag.status === 2 || ag.status === 3 || ag.status === 4) {
          continue;
        }

        activeFound++;
        const totalEth = ethers.utils.formatEther(ag.totalAmount);
        const totalMyr = (parseFloat(totalEth) * currentEthMyrRate).toFixed(2);

        let actionBtn = `<button class="btn btn-sm btn-outline-info me-1" onclick="openDetailModal(${i})">Detail</button>`;
        if (ag.status === 0) {
          actionBtn += `<button class="btn btn-sm btn-danger" onclick="cancelAgreement(${i})">Cancel</button>`;
        }

        rows += `
          <tr>
            <td class="fw-bold text-info">#${i}</td>
            <td class="small text-break">${ag.deliveryAddress}</td>
            <td class="small">${ag.parcelSize} | ${ag.parcelWeight} | <span class="badge bg-secondary">${ag.transportType}</span></td>
            <td><strong>${totalEth} ETH</strong><br><small class="text-warning">RM ${totalMyr}</small></td>
            <td>${STATUS_BADGES[ag.status]}</td>
            <td>${actionBtn}</td>
          </tr>
        `;
      }
    }

    table.innerHTML = activeFound > 0 
      ? rows 
      : `<tr><td colspan="6" class="text-center text-secondary py-3">No active in-progress agreements. Completed and refunded orders are archived in Transaction History.</td></tr>`;
  } catch (err) {
    table.innerHTML = `<tr><td colspan="6" class="text-center text-danger py-3">Error fetching created agreements.</td></tr>`;
  }
}

async function loadMarketplaceContracts() {
  if (!contract || !currentAccount) return;
  const table = document.getElementById("marketplaceTable");
  if (!table) return;

  try {
    const count = (await contract.agreementCount()).toNumber();
    let rows = "";
    let found = 0;

    for (let i = count; i >= 1; i--) {
      const ag = await contract.agreements(i);
      if (ag.status === 0 && ag.shipper.toLowerCase() !== currentAccount.toLowerCase()) {
        found++;
        const totalEth = ethers.utils.formatEther(ag.totalAmount);
        const netPayoutEth = (parseFloat(totalEth) * 0.99).toFixed(4);
        const netPayoutMyr = (parseFloat(netPayoutEth) * currentEthMyrRate).toFixed(2);

        rows += `
          <tr>
            <td class="fw-bold text-success">#${i}</td>
            <td class="small text-break">${ag.deliveryAddress}</td>
            <td class="small">${ag.parcelSize} | ${ag.parcelWeight} | <span class="badge bg-secondary">${ag.transportType}</span></td>
            <td><strong class="text-success">${netPayoutEth} ETH</strong><br><small class="text-warning">≈ RM ${netPayoutMyr}</small></td>
            <td>
              <button class="btn btn-sm btn-success fw-bold" onclick="acceptAgreement(${i})">
                <i class="fa-solid fa-handshake me-1"></i> Accept
              </button>
              <button class="btn btn-sm btn-outline-info ms-1" onclick="openDetailModal(${i})">Detail</button>
            </td>
          </tr>
        `;
      }
    }

    table.innerHTML = found > 0 
      ? rows 
      : `<tr><td colspan="5" class="text-center text-secondary py-3">No open marketplace orders available right now.</td></tr>`;
  } catch (err) {
    table.innerHTML = `<tr><td colspan="5" class="text-center text-danger py-3">Failed to load marketplace jobs.</td></tr>`;
  }
}

async function loadMyWaitingContracts() {
  if (!contract || !currentAccount) return;
  const table = document.getElementById("myWaitingTable");
  if (!table) return;

  try {
    const count = (await contract.agreementCount()).toNumber();
    let rows = "";
    let found = 0;

    for (let i = count; i >= 1; i--) {
      const ag = await contract.agreements(i);
      if (ag.status === 0 && ag.shipper.toLowerCase() === currentAccount.toLowerCase()) {
        found++;
        const totalEth = ethers.utils.formatEther(ag.totalAmount);
        const totalMyr = (parseFloat(totalEth) * currentEthMyrRate).toFixed(2);

        rows += `
          <tr>
            <td class="fw-bold text-warning">#${i}</td>
            <td class="small text-break">${ag.deliveryAddress}</td>
            <td class="small">${ag.parcelSize} | ${ag.parcelWeight} | <span class="badge bg-secondary">${ag.transportType}</span></td>
            <td><strong>${totalEth} ETH</strong><br><small class="text-warning">RM ${totalMyr}</small></td>
            <td>${STATUS_BADGES[ag.status]}</td>
            <td>
              <button class="btn btn-sm btn-danger me-1" onclick="cancelAgreement(${i})">Cancel</button>
              <button class="btn btn-sm btn-outline-info" onclick="openDetailModal(${i})">Detail</button>
            </td>
          </tr>
        `;
      }
    }

    table.innerHTML = found > 0 
      ? rows 
      : `<tr><td colspan="6" class="text-center text-secondary py-3">No open listings waiting for carriers.</td></tr>`;
  } catch (err) {
    table.innerHTML = `<tr><td colspan="6" class="text-center text-danger py-3">Failed to load waiting orders.</td></tr>`;
  }
}

async function loadCarrierAcceptedContracts() {
  if (!contract || !currentAccount) return;
  const table = document.getElementById("carrierAcceptedTable");
  if (!table) return;

  try {
    const count = (await contract.agreementCount()).toNumber();
    let rows = "";
    let found = 0;

    for (let i = count; i >= 1; i--) {
      const ag = await contract.agreements(i);
      if (ag.carrier.toLowerCase() === currentAccount.toLowerCase()) {
        found++;
        const totalEth = ethers.utils.formatEther(ag.totalAmount);
        const stage = ag.trackingStage.toNumber ? ag.trackingStage.toNumber() : Number(ag.trackingStage);
        const milestone = ag.currentMilestone.toNumber ? ag.currentMilestone.toNumber() : Number(ag.currentMilestone);

        let stageBadge = `<span class="badge bg-warning text-dark">${stage}% Accepted</span>`;
        if (stage === 100) stageBadge = `<span class="badge bg-success">100% Delivered</span>`;
        else if (stage > 0) stageBadge = `<span class="badge bg-info text-dark">${stage}% In Progress</span>`;

        let actionButtons = `<button class="btn btn-sm btn-outline-info" onclick="openDetailModal(${i})">Detail</button>`;
        if (ag.status === 1 && stage < 100) {
          actionButtons += `<button class="btn btn-sm btn-primary ms-1" onclick="openTrackingModal(${i}, ${stage})"><i class="fa-solid fa-location-arrow me-1"></i> Update</button>`;
        }

        rows += `
          <tr>
            <td class="fw-bold text-info">#${i}</td>
            <td class="small font-monospace">${ag.shipper.substring(0, 6)}...${ag.shipper.substring(38)}</td>
            <td class="small text-break">${ag.deliveryAddress}</td>
            <td><strong>${totalEth} ETH</strong></td>
            <td>${stageBadge}</td>
            <td><span class="badge bg-secondary">${milestone}% Released</span></td>
            <td>${actionButtons}</td>
          </tr>
        `;
      }
    }

    table.innerHTML = found > 0 
      ? rows 
      : `<tr><td colspan="7" class="text-center text-secondary py-3">No active deliveries assigned to you.</td></tr>`;
  } catch (err) {
    table.innerHTML = `<tr><td colspan="7" class="text-center text-danger py-3">Failed to load assigned deliveries.</td></tr>`;
  }
}

async function loadTransactionHistory() {
  if (!contract || !currentAccount) return;

  const table = document.getElementById("transactionHistoryTable");
  const title = document.getElementById("historyViewTitle");
  if (!table) return;

  try {
    const totalAgreements = (await contract.agreementCount()).toNumber();
    const isAdmin = ownerAddress && currentAccount.toLowerCase() === ownerAddress.toLowerCase();

    if (title) {
      title.innerHTML = isAdmin
        ? `<i class="fa-solid fa-shield-halved me-2 text-warning"></i> Global Transaction Ledger`
        : `<i class="fa-solid fa-clock-rotate-left me-2 text-primary"></i> Private Transaction History`;
    }

    let rows = "";
    let matchCount = 0;

    for (let i = totalAgreements; i >= 1; i--) {
      const ag = await contract.agreements(i);
      const isShipper = ag.shipper.toLowerCase() === currentAccount.toLowerCase();
      const isCarrier = ag.carrier.toLowerCase() === currentAccount.toLowerCase();

      if (isAdmin || isShipper || isCarrier) {
        matchCount++;

        let roleBadge = `<span class="badge bg-secondary">Admin</span>`;
        if (isShipper) roleBadge = `<span class="badge bg-primary">Shipper</span>`;
        else if (isCarrier) roleBadge = `<span class="badge bg-success">Carrier</span>`;

        let counterparty = "";
        if (isAdmin) {
          const sShort = `${ag.shipper.substring(0, 6)}...${ag.shipper.substring(38)}`;
          const cShort = ag.carrier === ethers.constants.AddressZero 
            ? "Open" 
            : `${ag.carrier.substring(0, 6)}...${ag.carrier.substring(38)}`;
          counterparty = `<span class="font-monospace">${sShort} / ${cShort}</span>`;
        } else if (isShipper) {
          counterparty = ag.carrier === ethers.constants.AddressZero 
            ? `<span class="text-secondary fst-italic">Open Marketplace</span>` 
            : `<span class="font-monospace">${ag.carrier.substring(0, 6)}...${ag.carrier.substring(38)}</span>`;
        } else {
          counterparty = `<span class="font-monospace">${ag.shipper.substring(0, 6)}...${ag.shipper.substring(38)}</span>`;
        }

        const totalEth = ethers.utils.formatEther(ag.totalAmount);
        const totalMyr = (parseFloat(totalEth) * currentEthMyrRate).toFixed(2);
        const feeEth = (parseFloat(totalEth) * 0.01).toFixed(4);
        const feeMyr = (parseFloat(totalEth) * 0.01 * currentEthMyrRate).toFixed(2);

        const trackingStage = ag.trackingStage 
          ? (ag.trackingStage.toNumber ? ag.trackingStage.toNumber() : Number(ag.trackingStage)) 
          : 0;

        let trackingDisplay = "";
        if (ag.status === 1) {
          let stageLabel = "Accepted";
          if (trackingStage === 30) stageLabel = "Heading to Pick Up";
          else if (trackingStage === 70) stageLabel = "In Transit";
          else if (trackingStage === 100) stageLabel = "Delivered";

          trackingDisplay = `
            <div class="mt-1" style="min-width: 120px;">
              <div class="d-flex justify-content-between text-secondary" style="font-size: 0.7rem;">
                <span class="text-truncate me-1">${stageLabel}</span>
                <span class="text-info fw-bold">${trackingStage}%</span>
              </div>
              <div class="progress" style="height: 4px; background-color: #334155;">
                <div class="progress-bar ${trackingStage === 100 ? 'bg-success' : 'bg-info'}" 
                     role="progressbar" 
                     style="width: ${trackingStage}%">
                </div>
              </div>
            </div>
          `;
        } else if (ag.status === 2) {
          trackingDisplay = `
            <div class="mt-1" style="min-width: 120px;">
              <div class="d-flex justify-content-between text-success" style="font-size: 0.7rem;">
                <span>Delivered</span>
                <span class="fw-bold">100%</span>
              </div>
              <div class="progress" style="height: 4px; background-color: #334155;">
                <div class="progress-bar bg-success" style="width: 100%"></div>
              </div>
            </div>
          `;
        }

        rows += `
          <tr data-search-content="#${i} ${ag.deliveryAddress} ${ag.transportType} ${ag.shipper} ${ag.carrier}">
            <td class="fw-bold text-info">#${i}</td>
            <td>${roleBadge}</td>
            <td>${counterparty}</td>
            <td class="small text-break" style="max-width: 200px;">${ag.deliveryAddress}</td>
            <td>
              <div class="fw-bold">${totalEth} ETH</div>
              <small class="text-warning">≈ RM ${totalMyr}</small>
            </td>
            <td>
                <div class="fw-bold text-light">${feeEth} ETH</div>
                <small class="text-warning font-monospace">≈ RM ${feeMyr}</small>
            </td>
            <td>
              ${STATUS_BADGES[ag.status]}
              ${trackingDisplay}
            </td>
            <td>
              <button class="btn btn-sm btn-outline-info" onclick="openDetailModal(${i})">Detail</button>
            </td>
          </tr>
        `;
      }
    }

    table.innerHTML = matchCount > 0 
      ? rows 
      : `<tr><td colspan="8" class="text-center text-secondary py-3">No recorded transactions found for this address.</td></tr>`;
  } catch (err) {
    table.innerHTML = `<tr><td colspan="8" class="text-center text-danger py-3">Error reading transactions from ledger.</td></tr>`;
  }
}

function filterHistoryTable() {
  const query = document.getElementById("historySearchInput").value.toLowerCase();
  const rows = document.querySelectorAll("#transactionHistoryTable tr[data-search-content]");
  rows.forEach(r => {
    const text = r.getAttribute("data-search-content").toLowerCase();
    r.style.display = text.includes(query) ? "" : "none";
  });
}

// =============================================================================
// ADMIN TREASURY VAULT
// =============================================================================
async function loadAdminVault() {
  if (!contract) return;
  try {
    const feesWei = await contract.accumulatedFees();
    const feesEth = ethers.utils.formatEther(feesWei);
    const feesMyr = (parseFloat(feesEth) * currentEthMyrRate).toFixed(2);

    document.getElementById("displayPlatformFees").innerText = `${parseFloat(feesEth).toFixed(4)} ETH`;
    document.getElementById("displayPlatformFeesMyr").innerText = `≈ RM ${feesMyr} MYR`;
  } catch (err) {
    console.error("Failed to load admin vault data:", err);
  }
}

async function withdrawPlatformFees() {
  if (!contract) return alert("Please connect wallet first.");
  try {
    const tx = await contract.withdrawPlatformFees();
    alert("Broadcasting treasury fee withdrawal...");
    await tx.wait();
    alert("Platform protocol fees successfully withdrawn to admin wallet!");
    loadAdminVault();
  } catch (err) {
    alert("Withdrawal failed: " + (err.reason || err.message || err));
  }
}

// =============================================================================
// MODAL DETAILS & SHOPEE-STYLE TIMELINE RENDERER (4 STAGES)
// =============================================================================
function getMilestoneTimelineHtml(trackingStage, status, deadlineDate) {
  if (status === 4) {
    return `
      <div class="mt-3 p-3 rounded bg-dark border border-secondary text-center text-muted small">
        <i class="fa-solid fa-ban text-danger me-1"></i> Delivery timeline terminated (Order Cancelled).
      </div>
    `;
  }

  const stages = [
    { pct: 0, title: "Order Placed & Escrow Locked", desc: "Deposit secured in escrow contract." },
    { pct: 30, title: "Driver Heading to Pick Up", desc: "Carrier accepted job and navigating to pickup spot." },
    { pct: 70, title: "Picked Up & On the Way", desc: "Parcel collected and currently in transit to recipient." },
    { pct: 100, title: "Delivered / Dropped Off", desc: "Package handed over or placed at designated spot." }
  ];

  let html = `
    <div class="mt-3 p-3 rounded bg-dark border border-secondary">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <span class="fw-bold text-white small">
          <i class="fa-solid fa-truck-fast text-info me-1"></i> Live Tracking Status
        </span>
        <span class="badge ${trackingStage === 100 ? 'bg-success' : 'bg-info text-dark'}">
          ${trackingStage}% Completed
        </span>
      </div>

      <div class="position-relative ps-4" style="border-left: 2px solid #334155; margin-left: 10px;">
  `;

  let currentActiveIndex = 0;
  stages.forEach((s, idx) => {
    if (trackingStage >= s.pct) currentActiveIndex = idx;
  });

  stages.forEach((stage, idx) => {
    const isReached = trackingStage >= stage.pct;
    const isCurrent = idx === currentActiveIndex;

    let dotHtml = '';
    let textColor = 'text-secondary';
    let titleColor = 'text-secondary';

    if (isCurrent && trackingStage < 100) {
      dotHtml = `<span class="position-absolute translate-middle rounded-circle bg-success border border-2 border-dark" 
                       style="left: -1px; top: 12px; width: 14px; height: 14px; box-shadow: 0 0 8px #22c55e;"></span>`;
      titleColor = 'text-info fw-bold';
      textColor = 'text-light';
    } else if (isReached) {
      dotHtml = `<i class="fa-solid fa-circle-check text-success position-absolute translate-middle" 
                    style="left: -1px; top: 12px; font-size: 13px; background: #0f172a;"></i>`;
      titleColor = 'text-light fw-semibold';
      textColor = 'text-muted';
    } else {
      dotHtml = `<i class="fa-regular fa-circle text-secondary position-absolute translate-middle" 
                    style="left: -1px; top: 12px; font-size: 12px; background: #0f172a;"></i>`;
    }

    html += `
      <div class="position-relative mb-3 ${idx === stages.length - 1 ? 'mb-0' : ''}">
        ${dotHtml}
        <div class="ps-2">
          <div class="${titleColor} small d-flex align-items-center gap-2">
            ${stage.title}
            <span class="badge bg-secondary" style="font-size: 0.65rem;">${stage.pct}%</span>
          </div>
          <div class="${textColor}" style="font-size: 0.75rem; line-height: 1.25;">
            ${stage.desc}
          </div>
        </div>
      </div>
    `;
  });

  html += `</div></div>`;
  return html;
}

async function openDetailModal(id) {
  if (!contract) return;

  try {
    const ag = await contract.agreements(id);
    const totalEth = ethers.utils.formatEther(ag.totalAmount);
    const remEth = ethers.utils.formatEther(ag.remainingAmount);

    const netPayoutEth = (parseFloat(totalEth) * 0.99).toFixed(4);
    const netPayoutMyr = (parseFloat(netPayoutEth) * currentEthMyrRate).toFixed(2);

    const deadlineSec = ag.deadline.toNumber ? ag.deadline.toNumber() : Number(ag.deadline);
    const deadlineDate = new Date(deadlineSec * 1000).toLocaleString();
    const currentSec = Math.floor(Date.now() / 1000);
    const diffSec = deadlineSec - currentSec;

    const trackingStage = ag.trackingStage ? (ag.trackingStage.toNumber ? ag.trackingStage.toNumber() : Number(ag.trackingStage)) : 0;
    const milestone = ag.currentMilestone.toNumber ? ag.currentMilestone.toNumber() : Number(ag.currentMilestone);

    let timeStatusHtml = "";
    if (ag.status === 2) {
      timeStatusHtml = `<span class="badge bg-success">Delivered & Fully Paid</span>`;
    } else if (ag.status === 4) {
      timeStatusHtml = `<span class="badge bg-secondary">Order Cancelled</span>`;
    } else if (diffSec > 0) {
      const minsLeft = Math.floor(diffSec / 60);
      const secsLeft = diffSec % 60;
      timeStatusHtml = `<span class="text-info fw-bold font-monospace">⏳ ${minsLeft}m ${secsLeft}s remaining</span>`;
    } else {
      timeStatusHtml = `<span class="text-danger fw-bold font-monospace">⚠️ Expired (Refund Available)</span>`;
    }

    document.getElementById("modalTitle").innerText = `Agreement #${id} Full Details`;
    document.getElementById("modalBody").innerHTML = `
      <div class="mb-2"><strong>Status:</strong> ${STATUS_BADGES[ag.status]} | <strong>Funds Released:</strong> ${milestone}%</div>
      <div class="mb-2 text-break"><strong>Shipper:</strong> <span class="font-monospace">${ag.shipper}</span></div>
      <div class="mb-2 text-break"><strong>Carrier:</strong> <span class="font-monospace">${ag.carrier === ethers.constants.AddressZero ? "Unassigned (Open Marketplace)" : ag.carrier}</span></div>
      <hr class="border-secondary">
      <div class="mb-2"><strong>Destination Address:</strong><br><span class="text-info">${ag.deliveryAddress}</span></div>
      <div class="row g-2 mb-2">
        <div class="col-6"><strong>Parcel Size:</strong> ${ag.parcelSize}</div>
        <div class="col-6"><strong>Weight:</strong> ${ag.parcelWeight}</div>
        <div class="col-12"><strong>Assigned Vehicle:</strong> <span class="badge bg-secondary">${ag.transportType}</span></div>
      </div>
      <hr class="border-secondary">
      <div class="row g-2 mb-2">
        <div class="col-6">
          <strong>Total Escrow:</strong> ${totalEth} ETH<br>
          <small class="text-warning">≈ RM ${(parseFloat(totalEth) * currentEthMyrRate).toFixed(2)}</small>
        </div>
        <div class="col-6"><strong>Remaining in Vault:</strong> ${remEth} ETH</div>
        <div class="col-12">
          <small class="text-secondary">Carrier Net Payout (99%): 
            <strong class="text-success">${netPayoutEth} ETH (RM ${netPayoutMyr})</strong>
          </small>
        </div>
      </div>
      <hr class="border-secondary">
      <div class="mb-1"><strong>Deadline:</strong> <span class="text-warning font-monospace">${deadlineDate}</span></div>
      <div class="mb-2"><strong>Urgency / Time Status:</strong> ${timeStatusHtml}</div>
      <hr class="border-secondary">
      ${getMilestoneTimelineHtml(trackingStage, ag.status, deadlineDate)}
    `;

    new bootstrap.Modal(document.getElementById("detailModal")).show();
  } catch (e) {
    alert("Failed to load details: " + e.message);
  }
}

function parseContractError(err, fallbackPrefix) {
  let msg = err.data?.message || err.error?.message || err.message || "";

  if (msg.includes("Delivery deadline has not passed yet") || msg.includes("revert")) {
    if (msg.includes("deadline")) {
      alert("Refund failed: Delivery deadline has not passed yet. Carrier is still within transit horizon.");
      return;
    }
    if (msg.includes("Milestone percentage must be greater")) {
      alert("Payout failed: You must release a percentage higher than the previously disbursed milestone.");
      return;
    }
    if (msg.includes("No remaining escrow balance")) {
      alert("Action failed: Escrow balance is already fully depleted.");
      return;
    }
  }

  if (err.code === 4001 || msg.includes("User denied")) {
    alert("Transaction rejected by user in MetaMask.");
  } else {
    alert(`${fallbackPrefix}: Contract reverted. Ensure conditions and deadlines are met.`);
  }
}

// -----------------------------------------------------------------------------
// Clear Manage Agreement Input Fields
// -----------------------------------------------------------------------------
function clearManageInputs() {
  const idInput = document.getElementById("payoutId") || 
                  document.getElementById("agreementId") || 
                  document.getElementById("manageAgreementId") ||
                  document.getElementById("manageId");
                  
  const percentInput = document.getElementById("payoutPercent") ||
                       document.getElementById("milestonePercent") ||
                       document.getElementById("releasePercentage");

  if (idInput) idInput.value = "";
  if (percentInput) percentInput.value = "";
}