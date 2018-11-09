const mongoose = require('mongoose');
const inventoryCoutingSchema = require('../schema/inventoryCoutings');

const inventoryCoutingModel = mongoose.model('inventory_coutings', inventoryCoutingSchema);

module.exports = inventoryCoutingModel;