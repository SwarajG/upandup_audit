const mongoose = require('mongoose');

const attendanceEntriesSchema = new mongoose.Schema({
	outletId: {
		type: String,
		required: true
	},
	userId: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	startTime: {
		type: String,
		required: true
	},
	endTime: {
		type: String,
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

module.exports = attendanceEntriesSchema;