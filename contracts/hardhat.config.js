require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // ← Load .env variables

const DEPLOYER_KEY = process.env.DEPLOYER_KEY || "";
const RESEARCHER_KEY = process.env.RESEARCHER_KEY || "";
const SUPPLIER_KEY = process.env.SUPPLIER_KEY || "";

module.exports = {
  solidity: {
    version: "0.8.28",  // Set this to match your contract's Solidity version
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hedera: {
      url: "https://testnet.hashio.io/api",  // Hedera testnet RPC URL
      accounts: [DEPLOYER_KEY, RESEARCHER_KEY, SUPPLIER_KEY],  // Load private keys
      chainId: 296,  // Hedera testnet chain ID
    },
  },
};

