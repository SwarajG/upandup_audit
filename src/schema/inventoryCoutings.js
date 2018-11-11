const mongoose = require('mongoose');

const inventoryCoutingSchema = new mongoose.Schema({
	outletId: {
		type: String,
    required: true
	},
	itemId: {
		type: String,
    required: true
	},
	itemName: {
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
	entryDate: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = inventoryCoutingSchema;