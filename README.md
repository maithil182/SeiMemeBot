# 🚀 Meme Token Deployer Bot on Sei Blockchain

A powerful Telegram bot that lets anyone deploy a verified **ERC-20 meme token** on the **Sei Blockchain** in seconds — no coding needed!

Created for memecoin enthusiasts, this bot also provides detailed token info, recent transfers, and fully automates deployment, ownership, and verification.

---

## ⚙️ Features

- 🔧 Deploy meme tokens with just name, symbol, supply & wallet address
- ✅ Auto-verifies contracts on the Sei block explorer
- 👑 Transfers 100% token supply and contract ownership to the user
- 🔍 View token info (name, symbol, owner, supply, balance)
- 🔄 View recent token transfers
- 💬 Telegram bot with session handling for each user

---

## 🧪 Commands

| Command              | Description                              |
|----------------------|------------------------------------------|
| `/start`             | Start the bot                            |
| `/help`              | List all available commands              |
| `/creatememetoken`   | Deploy a new meme token on Sei           |
| `/tokeninfo`         | View token details of a deployed token   |
| `/transfers`         | View recent transfers of a token         |
| `/balance`           | Check token balance of any wallet        |

---

## 🛠 How Deployment Works

1. User types `/creatememetoken`
2. Bot collects:
   - 📛 Token name
   - 🔤 Token symbol
   - 🔢 Total supply
   - 👛 Recipient wallet address (will be token owner)
3. Bot:
   - Deploys the ERC-20 token on Sei
   - Mints total supply to user's wallet
   - Transfers ownership to user's wallet
   - Verifies the contract on explorer
4. User receives:
   - ✅ Verified contract address
   - 💰 Full token supply
   - 🔗 Explorer link

---

## 🔐 Security

- Bot deploys from a backend wallet (set via `.env`)
- User provides only their **public wallet address**
- After deployment:
  - 💸 Full token supply is transferred to user
  - 👑 Contract ownership is transferred to user
- ✅ Bot retains **no access** after deployment

---

## 🔍 Token Info (`/tokeninfo`)

- User enters a token address
- Bot fetches and displays:
  - Name, symbol, total supply
  - Owner address
  - Owner balance
  - Explorer link

---

## 🔄 Transfers (`/transfers`)

- User enters a token address
- Bot fetches recent `Transfer` events (last 100 blocks)
- Displays:
  - From → To
  - Amount
  - Transaction link

---

## 📘 Example Flow

**User:** `/creatememetoken`  
**Bot:** What should be the token name?  
**User:** TurboPepe  
**Bot:** Token symbol?  
**User:** TURBO  
**Bot:** Total supply?  
**User:** 1000000  
**Bot:** Your wallet address?  
**User:** 0x123...abc  

🚀 Deploying your meme token...

✅ Deployed!  
📦 Contract Address: 0xABCDEF...  
👑 Owner: 0x123...abc  
🔗 Explorer: https://seitrace.com/address/0xABCDEF...

🔍 Verifying contract...  
✅ Contract verified successfully!

---

## 📁 Project Structure

.
├── bot.js                # Main Telegram bot logic
├── deploy.js             # Handles contract deployment & verification
├── artifacts/           # Compiled contract JSON ABI
│   └── contracts/
│       └── MemeToken.sol/
│           └── MemeToken.json
├── contracts/
│   └── MemeToken.sol    # ERC-20 token contract
└── .env                 # Environment variables

---

## 🧱 Smart Contract Template

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MemeToken is ERC20, Ownable {
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address owner
    ) ERC20(name, symbol) {
        _mint(owner, initialSupply);
        transferOwnership(owner);
    }
}

---

## 🌐 Sei Blockchain
- ✅ Tokens are deployed on Sei EVM
- 🔍 Verified on SeiTrace
- ⚡ Low gas, fast finality
- 🐸 Perfect for viral memecoins

---

## ⚙️ Requirements
- Node.js
- `ethers`, `dotenv`, `node-telegram-bot-api`
- Sei RPC endpoint
- A funded deployer wallet (private key in `.env`)

---

## 🧪 Environment Setup
Create a `.env` file in the root directory:

```ini
BOT_TOKEN=your_telegram_bot_token
PRIVATE_KEY=your_deployer_wallet_private_key
RPC_URL=https://sei_rpc_url
```

---

## 🚀 Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/meme-token-bot.git
   cd meme-token-bot

2. Configure environment:
   
   - Copy .env.example to .env :
     ```bash
     cp .env.example .env
      ```
   - Edit .env with your credentials:
     ```ini
     BOT_TOKEN=your_telegram_bot_token    # Get from @BotFather
     PRIVATE_KEY=your_deployer_private_key # Your wallet's private key
     RPC_URL=https://sei_rpc_url          # Sei blockchain RPC endpoint
      ```
     ```
3. Compile smart contract:
   
   ```bash
   npx hardhat compile
    ```
## 🏃‍♂️ Running the Bot
1. Start the bot:
   
   ```bash
   npm start
    ```
2. Verify it's working:
   
   - Open Telegram
   - Search for your bot
   - Send /start command
   - Bot should respond with welcome message