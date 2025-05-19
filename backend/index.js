const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const supplierRoutes = require('./routes/supplier');
const jobRoutes = require('./routes/job');
const proofRoutes = require('./routes/proof');
const uploadRoutes = require("./routes/upload");



const path = require('path');




dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // Allow JSON in body

app.use('/api', supplierRoutes);
app.use('/api', jobRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', proofRoutes);
app.use("/api", uploadRoutes);





app.get('/', (req, res) => {
    res.send('Backend API is running');
});

app.listen(PORT, () => {
    console.log(`✅ Backend server listening on port ${PORT}`);
});

