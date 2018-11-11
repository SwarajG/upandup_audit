const mongoose = require('mongoose');

const stockItemSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	type: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = stockItemSchema;