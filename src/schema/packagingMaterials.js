const mongoose = require('mongoose');

const packagingMaterialSchema = new mongoose.Schema({
	name: {
    type: String,
    required: true
	},
	size: {
		type: String,
		required: true
	},
	quantity: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = packagingMaterialSchema;