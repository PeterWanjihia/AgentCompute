// routes/proof.js
const express = require('express');
const router = express.Router();
const { submitProof } = require('../controllers/proofController');

router.post('/submit-proof', submitProof);

module.exports = router;
