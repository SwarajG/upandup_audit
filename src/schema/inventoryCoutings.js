const mongoose = require('mongoose');

const inventoryCoutingSchema = new mongoose.Schema({
	stockName: {
    type: String,
    required: true
	},
	unit: {
    type: String,
    required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	timeStamp: {
		type: Date,
		default: Date.now
	}
});

module.exports = inventoryCoutingSchema;