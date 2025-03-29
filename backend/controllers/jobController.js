const path = require('path');
const { addJob } = require('../models/jobStore');


const submitJob = (req, res) => {
    const { walletId, budget, requirements } = req.body;
    const file = req.file;

    if (!walletId || !budget || !requirements || !file) {
        return res.status(400).json({ error: 'Missing required fields or file' });
    }

    let parsedRequirements;
    try {
        parsedRequirements = JSON.parse(requirements);
    } catch (err) {
        return res.status(400).json({ error: 'Invalid JSON in requirements field' });
    }

    const fileUrl = `/uploads/${file.filename}`; // Local path, simulating IPFS

    const newJob = addJob({
        walletId,
        budget,
        requirements: parsedRequirements,
        fileUrl
    });

    return res.status(201).json({
        status: 'queued',
        jobId: newJob.jobId
    });
};
const { getAvailableJobs } = require('../models/jobStore');
const { getSuppliers } = require('../models/supplierStore');

const getJobForSupplier = (req, res) => {
    const { supplierId } = req.query;

    if (!supplierId) {
        return res.status(400).json({ error: 'Missing supplierId' });
    }

    const suppliers = getSuppliers();
    const supplier = suppliers.find(s => s.id === supplierId);

    if (!supplier) {
        return res.status(404).json({ error: 'Supplier not found' });
    }

    const supplierSpecs = supplier.specs;
    const availableJobs = getAvailableJobs();

    // Simple matching logic
    const matchedJob = availableJobs.find(job => {
        const reqs = job.requirements;
        return (
            supplierSpecs.cores >= reqs.cores &&
            supplierSpecs.ram >= reqs.ram
            // You can extend this to include duration/bandwidth if needed
        );
    });

    if (!matchedJob) {
        return res.status(204).send(); // No job available
    }

    // Optional: mark job as "assigned"
    matchedJob.assignedTo = supplierId;
    matchedJob.status = 'assigned';

    return res.status(200).json({
        jobId: matchedJob.jobId,
        fileUrl: matchedJob.fileUrl,
        requirements: matchedJob.requirements,
        budget: matchedJob.budget
    });
};



module.exports = {
    submitJob,
    getJobForSupplier
};




