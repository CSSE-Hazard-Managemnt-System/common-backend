const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware for CORS and JSON body parsing
app.use(cors());
app.use(express.json());

// Mount API routes
app.use('/api/alerts', require('./routes/alertRoutes'));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'API is active' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`DMS Backend running on port ${PORT}`);
});