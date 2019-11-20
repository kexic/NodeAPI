const mongoose = require('mongoose');

const NumberSchema = mongoose.Schema({
    numbers: { type: Array, "default": [] }
}, {
    collection: "numbers"
});

module.exports = mongoose.model('Numbers', NumberSchema);