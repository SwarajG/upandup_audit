const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
	},
	lastName: {
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