const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    item: String,
    protectionPlan: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Orders', OrderSchema);