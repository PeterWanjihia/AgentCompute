async function submit() {
  try {
    const fileInput = document.getElementById("jobFile");
    const budget = document.getElementById("budgetInput").value;

    if (!fileInput.files.length) {
      alert("Please choose a file to upload.");
      return;
    }

    const file = fileInput.files[0];

    // 🔗 1. Upload to backend → IPFS
    const formData = new FormData();
    formData.append("file", file);

    const uploadRes = await fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: formData
    });

    const uploadJson = await uploadRes.json();
    const ipfsHash = uploadJson.ipfsHash;

    console.log("✅ Uploaded to IPFS:", ipfsHash);

    // 🔗 2. Send IPFS hash to smart contract
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const abi = await (await fetch('./contracts/JobMarketplace.json')).json();
    const { address } = await (await fetch('./contracts/JobMarketplace-address.json')).json();

    const contract = new ethers.Contract(address, abi, signer);

    const tx = await contract.submitJob(ipfsHash, {
      // value: ethers.parseUnits(budget, 8) // ✅ Tinybars = 10^-8 HBAR
      value: ethers.parseUnits(budget.toString(), "ether") // 1 HBAR = 10^8 tinybars
    });

    await tx.wait();

    document.getElementById("submitResult").innerText = "✅ Job submitted to blockchain!";
  } catch (err) {
    console.error(err);
    document.getElementById("submitResult").innerText = "❌ " + (err?.message || "Error");
  }
}
