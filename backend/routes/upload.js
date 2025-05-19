const express = require("express");
const multer = require("multer");
const path = require("path");
const uploadToPinata = require("../utils/pinata");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const ipfsHash = await uploadToPinata(req.file.path);
    res.json({ ipfsHash });
  } catch (err) {
    console.error("❌ Upload error:", err.message);
    res.status(500).json({ error: "Upload failed" });
  }
});

module.exports = router;
