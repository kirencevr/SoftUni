const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficulty: Number
});

module.exports = mongoose.model('Cube', cubeSchema);