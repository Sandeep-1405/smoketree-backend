const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    addressLine: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
});

const Address = mongoose.model('Address', addressSchema);
module.exports = Address;