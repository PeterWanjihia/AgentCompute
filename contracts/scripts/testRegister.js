// scripts/testRegister.js
const hre = require("hardhat");

async function main() {
  // Use multiple signers: deployer and supplier
  const [deployer,researcher, supplier] = await hre.ethers.getSigners();

  // Log the deployer and supplier addresses
  console.log("📡 Deployer Address:", deployer.address);
  console.log("📡 Supplier Address:", supplier.address);
  console.log("📡 Reseacher Address:", researcher.address);


  // Use your deployed contract address
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Update with actual address

  const JobMarketplace = await hre.ethers.getContractFactory("JobMarketplace");
  const contract = await JobMarketplace.attach(contractAddress);

  // Log the action: which address is registering as a supplier
  console.log(`📡 ${supplier.address} is registering as a supplier...`);

  // Call registerSupplier() using the second signer (supplier)
  const tx = await contract.connect(supplier).registerSupplier();
  await tx.wait();

  console.log(`✅ Supplier ${supplier.address} registered`);

  // Fetch and log the supplier info from the contract
  const supplierInfo = await contract.suppliers(supplier.address);
  console.log("🔍 Supplier info from chain:", supplierInfo);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
