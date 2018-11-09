const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	first_name: {
		type: String,
	},
	last_name: {
		type: String,
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		index: true,
		unique: true,
		required: true
	}
});

module.exports = userSchema;