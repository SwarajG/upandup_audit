const mongoose = require('mongoose');

const purchaseEntriesSchema = new mongoose.Schema({
	itemId: {
    type: String,
    required: true
  },
  outletId: {
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
    type: Number,
    required: true
  },
  price: {
    type: Number,
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

module.exports = purchaseEntriesSchema;