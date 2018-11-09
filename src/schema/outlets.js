const mongoose = require('mongoose');

const outletsSchema = new mongoose.Schema({
	name: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = outletsSchema;