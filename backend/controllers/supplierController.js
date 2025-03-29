const { addSupplier } = require('../models/supplierStore');

const registerSupplier = (req, res) => {
    const { walletId, specs } = req.body;

    if (!walletId || !specs) {
        return res.status(400).json({ error: 'Missing walletId or specs' });
    }

    const newSupplier = addSupplier({ walletId, specs });

    return res.status(201).json({
        status: 'registered',
        supplierId: newSupplier.id
    });
};

module.exports = { registerSupplier };
