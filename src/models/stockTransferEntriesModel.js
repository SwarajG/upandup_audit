const mongoose = require('mongoose');
const stockTransferEntrieSchema = require('../schema/stockTransferEntries');

const stockTransferEntriesModel = mongoose.model('stock_transfer_entries', stockTransferEntrieSchema);

module.exports = stockTransferEntriesModel;