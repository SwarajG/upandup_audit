const mongoose = require('mongoose');

const stockTransferEntrieSchema = new mongoose.Schema({
	fromOutlet: {
    type: String,
    required: true
	},
	toOutlet: {
		type: String,
		required: true
  },
  quantity: {
    type: Number,
    required: true
  },
	unit: {
    type: String,
    required: true
	},
	timeStamp: {
		type: Date,
		default: Date.now
	}
});

module.exports = stockTransferEntrieSchema;