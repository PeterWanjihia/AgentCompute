// controllers/proofController.js
const jobStore = require('../models/jobStore');

const submitProof = (req, res) => {
    const { jobId, supplierId, proofUrl, notes } = req.body;

    if (!jobId || !supplierId || !proofUrl) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const job = jobStore.getJobs().find(j => j.jobId === jobId); // ✅


    if (!job) {
        return res.status(404).json({ error: 'Job not found' });
    }

    if (job.assignedTo !== supplierId) {
        return res.status(403).json({ error: 'Supplier is not assigned to this job' });
    }

    // Update job object
    job.status = 'completed';
    job.proofUrl = proofUrl;
    job.notes = notes || null;
    job.completedAt = new Date().toISOString();

    // Later: trigger Hedera smart contract payment here

    return res.status(200).json({
        status: 'proof received',
        jobId: job.jobId,
        next: 'Payment pending'
    });
};

module.exports = { submitProof };
