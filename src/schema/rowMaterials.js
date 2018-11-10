const mongoose = require('mongoose');

const rowMaterialSchema = new mongoose.Schema({
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

module.exports = rowMaterialSchema;