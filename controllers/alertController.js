const Alert = require('../models/Alert');

// @desc    Create new alert
// @route   POST /api/alerts
const createAlert = async (req, res) => {
    try {
        const { alertId, severity, headline, instruction, languages } = req.body;

        // Sequence Diagram representation of validateContent()
        if (!headline || !instruction) {
            return res.status(400).json({ message: 'Headline and instruction are required' });
        }

        const alert = await Alert.create({
            alertId,
            severity,
            headline,
            instruction,
            languages,
            status: 'Dispatching'
        });

        res.status(201).json(alert);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = {
    createAlert
};