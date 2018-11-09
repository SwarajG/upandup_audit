const mongoose = require('mongoose');
const purchaseEntrieSchema = require('../schema/purchaseEntries');

const purchaseEntriesModel = mongoose.model('purchase_entries', purchaseEntrieSchema);

module.exports = purchaseEntriesModel;