const jobs = [];

function addJob({ walletId, requirements, budget, fileUrl }) {
    const jobId = `job_${jobs.length + 1}`;
    const newJob = {
        jobId,
        walletId,
        requirements,
        budget,
        fileUrl,
        status: 'queued',
        assignedTo: null,
        submittedAt: new Date().toISOString()
    };
    jobs.push(newJob);
    return newJob;
}

function getJobs() {
    return jobs;
}

function getAvailableJobs() {
    return jobs.filter(job => job.status === 'queued' && !job.assignedTo);
}

module.exports = { addJob, getJobs, getAvailableJobs };
