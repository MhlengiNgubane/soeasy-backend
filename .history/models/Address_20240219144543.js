const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    : {type: String, required: true},
    value: {type: String, required: true},
    imageUrl: {type: String, required: true},
});

module.exports = mongoose.model('Address', AddressSchema);