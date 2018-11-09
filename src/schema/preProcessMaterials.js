const mongoose = require('mongoose');

const preProcessMaterialSchema = new mongoose.Schema({
	name: {
    type: String,
    required: true
	},
	type: {
    type: String,
	},
	createAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = preProcessMaterialSchema;