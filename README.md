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

## 4. Prerequisites & Environment Setup

Before running the application locally, ensure you have the following installed:

1. **Web Browser**: Google Chrome, Brave, or Mozilla Firefox.
2. **MetaMask Extension**: Installed and initialized in your browser ([Download MetaMask](https://metamask.io/)).
3. **Local Blockchain Emulator**: 
   - [Ganache UI](https://trufflesuite.com/ganache/) (Quickstart Ethereum Workspace).
4. **Local HTTP Web Server**:
   - VS Code extension: **Live Server** (Recommended), or Node.js `http-server` / Python SimpleHTTPServer.

---

## 5. Step-by-Step Installation & Execution Guide

### Step 1: Start the Local Blockchain Node
1. Launch **Ganache UI**.
2. Click the **"QUICKSTART" (Ethereum)** button to spin up a local 10-account workspace.
3. Verify the default RPC Server endpoint displayed in the header:
   - **RPC Server**: `HTTP://127.0.0.1:7545`
   - **Network ID**: `5777`

### Step 2: Configure MetaMask
1. Open the MetaMask extension and click **Add Network > Add a network manually**:
   - **Network Name**: `Ganache Localhost`
   - **New RPC URL**: `http://127.0.0.1:7545`
   - **Chain ID**: `1337` (or `5777`, match Ganache)
   - **Currency Symbol**: `ETH`
2. Import at least **three test accounts** from Ganache using their private keys (click the key icon next to any account in Ganache):
   - **Account 1**: Contract Deployer / Platform Owner (Admin)
   - **Account 2**: Shipper (Cargo Owner)
   - **Account 3**: Carrier (Courier / Driver)

### Step 3: Deploy the Smart Contract
1. Open [Remix Ethereum IDE](https://remix.ethereum.org/).
2. Create `LogisticsEscrow.sol` in Remix and paste the contract code.
3. Compile with Solidity compiler `^0.8.0`.
4. In the **Deploy & Run Transactions** tab:
   - **Environment**: Select `Injected Provider - MetaMask`.
   - Ensure MetaMask is connected to **Account 1 (Deployer)**.
   - Click **Deploy**.
5. Copy the deployed contract address and verify it matches the configuration in `app.js`:
   ```javascript
   const contractAddress = "0xfd6456465d084Cc3A5AdAc950CC0e4BCbCF8e269";

### Step 4: Run the Front-End Client
1. Open the project root folder in **Visual Studio Code**.
2. Right-click `index.html` and click **"Open with Live Server"**.
3. The application will launch in your browser at `http://127.0.0.1:5500/index.html`.
4. Click **Connect Wallet** in the top navigation bar to grant MetaMask permissions.

---

## 6. Smart Contract Specifications

- **Contract Name**: `LogisticsEscrow`
- **Compiler Version**: `Solidity ^0.8.0`
- **Economic Valuation Model**: 1 ETH ≈ RM 13,500.00 MYR
- **Protocol Fee**: Fixed at 1% of disbursed milestone releases.
- **Escrow Settlement Rules**:
  - Full / partial timeout refunds are exempt from platform protocol fees (0%).
  - Terminal states (`Completed`, `Refunded`, `Cancelled`) enforce strict non-reentrant state transitions.

---

## 7. Troubleshooting & Operational Notes

- **Ganache State Ephemerality**: Ganache Quickstart executes in-memory. If closed, EVM state resets. To retain data, click **"SAVE WORKSPACE"**. If restarted in Quickstart, clear MetaMask cached nonce history via `Settings > Advanced > Clear activity tab data`.
- **MetaMask Account Switching**: The application incorporates the EIP-2255 `wallet_requestPermissions` API. When switching roles, click **Disconnect** and re-connect to trigger the MetaMask account selection modal.
- **Client-Side Refund Pre-Flight Check**: If `Claim Refund` is clicked before the transit deadline expires, the client-side pre-flight check blocks the call and presents a countdown alert to avoid unhandled JSON-RPC EVM reverts.

## 8. System Architecture & Project Directory Structure

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
