const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectToDb = require('./db');
const router = require('./routes/routes');
const dotenv = require('dotenv').config()

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

connectToDb();
app.use(router)

port = process.env.port

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});