const mongoose = require('mongoose');
const stockItemSchema = require('../schema/stockItems');

const stockItemsModel = mongoose.model('stock_items', stockItemSchema);

module.exports = stockItemsModel;