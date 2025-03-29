const express = require('express');
const router = express.Router();
const upload = require('../utils/upload');
const { submitJob, getJobForSupplier } = require('../controllers/jobController');
const { getJobs } = require('../models/jobStore');



router.post('/submit-job', upload.single('inputFile'), submitJob);
router.get('/jobs/available', getJobForSupplier);


router.get('/jobs', (req, res) => {
    const jobs = getJobs();
    res.json(jobs);
  });




module.exports = router;








