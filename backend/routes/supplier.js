const express = require('express');
const router = express.Router();
const { registerSupplier } = require('../controllers/supplierController');
const { getSuppliers } = require('../models/supplierStore'); // ✅ Added line


router.post('/register-supplier', registerSupplier);
// ✅ Add this temporary GET route to fetch all suppliers
router.get('/suppliers', (req, res) => {
    const suppliers = getSuppliers();
    res.json(suppliers);
});

module.exports = router;

