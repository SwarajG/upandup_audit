const mongoose = require('mongoose');

const stockTransferEntrieSchema = new mongoose.Schema({
	itemId: {
    type: String,
    required: true
	},
	itemName: {
    type: String,
    required: true
  },
	fromOutletId: {
    type: String,
    required: true
	},
	toOutletId: {
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
	entryDate: {
    type: String,
    required: true
  },
	createdAt: {
		type: Date,
		default: Date.now
    },
});

module.exports = stockTransferEntrieSchema;