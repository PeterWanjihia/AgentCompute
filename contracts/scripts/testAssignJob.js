// scripts/testAssignJob.js
const hre = require("hardhat");

async function main() {
  const [deployer, researcher, supplier] = await hre.ethers.getSigners();

  console.log("📡 Deployer Address:", deployer.address);
  console.log("📡 Researcher Address:", researcher.address);
  console.log("📡 Supplier Address:", supplier.address);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with actual deployed address

  const JobMarketplace = await hre.ethers.getContractFactory("JobMarketplace");
  const contract = await JobMarketplace.attach(contractAddress);

  const supplierInfo = await contract.suppliers(supplier.address);
  console.log("Supplier info from contract:", supplierInfo);

  if (!supplierInfo.registered) {
    console.log("❌ Supplier not registered! Exiting...");
    return;
  }

  console.log("Registered Supplier Address:", supplierInfo.wallet);

  if (supplierInfo.wallet !== supplier.address) {
    console.log("❌ Address mismatch! The supplier registered address doesn't match the one you're passing.");
    return;
  }

  // Get the jobId and log its type
  const jobIdBN = await contract.nextJobId();
  console.log("jobIdBN:", jobIdBN);
  console.log("Type of jobIdBN:", typeof jobIdBN);

  // Handle BigNumber or BigInt properly
  let jobId;

  if (typeof jobIdBN === "object" && jobIdBN.toString) {
    // If jobIdBN is a BigNumber (ethers.js type)
    jobId = jobIdBN.sub(1);
  } else if (typeof jobIdBN === "bigint") {
    // If jobIdBN is a BigInt (native JS type)
    jobId = jobIdBN - 1n;
  } else {
    console.log("Unknown type for jobId:", typeof jobIdBN);
    return;
  }

  console.log("📡 Assigning job ID:", jobId.toString ? jobId.toString() : jobId);

  const tx = await contract.connect(deployer).assignJob(jobId, supplier.address);
  await tx.wait();

  console.log(`✅ Job assigned to ${supplier.address}`);
}

main().catch(console.error);
