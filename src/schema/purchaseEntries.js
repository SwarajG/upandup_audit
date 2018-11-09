const mongoose = require('mongoose');

const purchaseEntriesSchema = new mongoose.Schema({
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
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
	createAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = purchaseEntriesSchema;