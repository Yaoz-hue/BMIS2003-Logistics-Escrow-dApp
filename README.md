# Decentralized Logistics Escrow dApp (BMIS2003)

[![Solidity](https://img.shields.io/badge/Solidity-%5E0.8.0-363636?logo=solidity)](https://soliditylang.org/)
[![Ethers.js](https://img.shields.io/badge/Ethers.js-v5.7.2-2535a0?logo=ethereum)](https://docs.ethers.org/v5/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-v5.3-7952b3?logo=bootstrap)](https://getbootstrap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **GitHub Repository:** [https://github.com/Yaoz-hue/BMIS2003-Logistics-Escrow-dApp](https://github.com/Yaoz-hue/BMIS2003-Logistics-Escrow-dApp)  
> *(Note: Ensure the repository visibility is set to **Public** for evaluation).*

---

## 1. Project Overview
The **Decentralized Logistics Escrow dApp** is an Ethereum-based decentralized escrow application designed to address trust deficits, cash-on-delivery vulnerabilities, and payment reconciliation delays in peer-to-peer freight and logistics operations. 

By leveraging EVM smart contracts, physical delivery workflows are cryptographically coupled with economic escrow deposits. Consignments enforce progressive milestone-based fund releases (30%, 70%, and 100%) and temporal expiration refund protection, alongside an automated 1% platform protocol fee mechanism benchmarked to local Malaysian currency (1 ETH ≈ RM 13,500.00 MYR).

---

## 2. Key Features & Role-Based Architecture

### 📦 1. Shipper Operations (Cargo Owner)
- **Escrow Creation & Lock**: Specify physical cargo dimensions (`Parcel Size`, `Parcel Weight`, and `Vehicle / Transport`) and custom delivery durations (Days / Hours / Mins) with real-time fiat conversion estimation.
- **Progressive Milestone Releases**: Release funds in controlled stages (`30% On Pickup`, `70% In Transit`, `100% Final Delivery`), automatically triggering net driver disbursements minus protocol fees.
- **Temporal Refund Protection**: Shippers can reclaim unreleased escrow balances via `claimRefund(id)` once the delivery deadline expires. Built-in client-side pre-flight checks prevent unhandled EVM reverts.
- **Active Workspace Isolation**: Terminal state orders (`Completed`, `Refunded`, and `Cancelled`) are automatically filtered out from active workspace tables.

### 🚚 2. Carrier Operations (Courier / Driver)
- **Open Order Marketplace**: Browse unassigned delivery tenders broadcasted across the network. Built-in contract guards prevent self-acceptance conflicts (`require(_carrier != msg.sender)`).
- **Net Payout Transparency**: Clear upfront accounting displaying gross deposit vs. net carrier earnings after 1% platform deduction.
- **My Deliveries Dashboard**: Track assigned orders with decoupled dual tracking meters: physical logistics telemetry (0% to 100%) versus financial settlement release percentages.
- **4-Stage Visual Milestone Tracking**: Dynamic Shopee-style visual tracking timeline modal updated via on-chain events (`TrackingUpdated`).

### 🛡️ 3. Platform Administration & Global Governance
- **Global Transaction Ledger**: Bypasses account isolation to provide full transparent auditing of all cross-party agreements across the system.
- **Dual-Denomination Auditing**: Displays primary Ethereum values alongside local Malaysian Ringgit equivalents for both escrow deposits and accumulated protocol revenue.
- **Admin Treasury Vault**: Secure on-chain protocol fee accumulation (`accumulatedFees`) with single-signature contract owner withdrawal functionality (`withdrawPlatformFees()`).

---

## 3. System Architecture & Project Directory Structure

```text
BMIS2003-Logistics-Escrow-dApp/
│
├── contracts/
│   └── LogisticsEscrow.sol        # Core smart contract source code
│
├── index.html                     # Semantic SPA user interface (Bootstrap 5)
├── app.js                         # Web3 integration, Ethers.js controller & DOM engine
├── README.md                      # Comprehensive documentation and installation guide
└── Note.txt                       # Quick reference link to the GitHub repository
