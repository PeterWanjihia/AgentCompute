const hre = require("hardhat");

async function main() {
  // Get the factory for the JobMarketplace contract
  const JobMarketplace = await hre.ethers.getContractFactory("JobMarketplace");

  // Get the first signer, who will be the deployer
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deployer Address:", deployer.address);  // Log the deployer's address

  console.log("⏳ Deploying contract to Hedera testnet...");

  // Deploy the contract
  const contract = await JobMarketplace.deploy();

  // In Ethers v6, the contract address is often stored in `contract.target`.
  // Some versions might store it in `contract.address`.
  const contractAddress = contract.target || contract.address;

  // Log the resulting contract address
  console.log(`✅ Contract deployed at: ${contractAddress}`);
}

// Start the deployment process
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
