const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    alertId: {
        type: String,
        required: true,
        unique: true
    },
    severity: {
        type: String,
        enum: ['Low', 'Medium', 'High', 'Critical'],
        required: true
    },
    headline: {
        type: String,
        required: true
    },
    instruction: {
        type: String,
        required: true
    },
    languages: {
        type: [String],
        default: ['English']
    },
    status: {
        type: String,
        enum: ['Draft', 'Dispatching', 'Dispatched', 'Failed'],
        default: 'Draft'
    },
    issuedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Alert', alertSchema);