// Simple in-memory supplier store
const suppliers = [];

function addSupplier(supplierData) {
    const id = `supplier_${suppliers.length + 1}`;
    const newSupplier = {
        id,
        wallet: supplierData.walletId,
        specs: supplierData.specs,
        registeredAt: new Date().toISOString()
    };
    suppliers.push(newSupplier);
    return newSupplier;
}

function getSuppliers() {
    return suppliers;
}

module.exports = { addSupplier, getSuppliers };
