const mongoose = require('mongoose');

const staffFoodEntriesSchema = new mongoose.Schema({
	outletId: {
		type: String,
		required: true
  },
  mealType: {
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
	foodTime: {
		type: String,
		required: true
	},
	itemName: {
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

module.exports = staffFoodEntriesSchema;