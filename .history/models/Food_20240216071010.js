const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    title: {type: String, required: true},
    t: {type: String, required: true},
    imageUrl: {type: String, required: true},
});

module.exports = mongoose.model('Food', FoodSchemaSchema);