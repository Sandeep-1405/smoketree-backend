const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose.connect(process.env.mongodb_url)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });
}

module.exports = connectToDb;
