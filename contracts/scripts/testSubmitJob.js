// scripts/testSubmitJob.js
const hre = require("hardhat");

async function main() {
  const [deployer, researcher, supplier] = await hre.ethers.getSigners();

  console.log("📡 Deployer Address:", deployer.address);
  console.log("📡 Researcher Address:", researcher.address);
  console.log("📡 Supplier Address:", supplier.address);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const JobMarketplace = await hre.ethers.getContractFactory("JobMarketplace");
  const contract = await JobMarketplace.attach(contractAddress);

  const ipfsHash = "QmYnsQtUtZAFJnqzY4f4ubv3Gr6ULE28HZCZKvtvkrK1R3";

  // 👇 This means 5 HBAR in 8 decimals (HBAR uses 8 decimals)
  const budget = hre.ethers.parseUnits("5", "ether");

  console.log(`📡 ${researcher.address} is submitting a job with budget 5 HBAR...`);

  const tx = await contract.connect(researcher).submitJob(ipfsHash, {
    value: budget,
  });
  await tx.wait();

  console.log("✅ Job submitted by researcher!");

  const jobId = 1;
  const job = await contract.jobs(jobId);

  console.log("🧾 Job Info:");
  console.log("   Researcher:     ", job.researcher);
  console.log("   Budget (HBAR):  ", hre.ethers.formatUnits(job.budget, 8)); // ✅ Correct way
  console.log("   IPFS Input:     ", job.inputIpfs);
  console.log("   Assigned:       ", job.assigned);
}

main().catch(console.error);
