async function register() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
  
      const abi = await (await fetch('./contracts/JobMarketplace.json')).json();
      const { address } = await (await fetch('./contracts/JobMarketplace-address.json')).json();
  
      const contract = new ethers.Contract(address, abi, signer);
  
      const tx = await contract.registerSupplier();
      await tx.wait();
  
      document.getElementById("regResult").innerText = "✅ Supplier registered successfully!";
    } catch (err) {
      console.error(err);
      document.getElementById("regResult").innerText = "❌ " + (err?.message || "Error occurred");
    }
  }
  