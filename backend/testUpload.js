const uploadToPinata = require("./utils/pinata");

async function test() {
  try {
    const ipfsHash = await uploadToPinata("example.txt");
    console.log("✅ File uploaded. IPFS Hash:", ipfsHash);
  } catch (err) {
    console.error("❌ Upload failed:", err.message);
  }
}

test();
