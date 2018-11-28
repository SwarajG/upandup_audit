const mongoose = require('mongoose');
const staffFoodEntriesSchema = require('../schema/staffFoodEntries');

const staffFoodEntriesModel = mongoose.model('staff_food_entries', staffFoodEntriesSchema);

module.exports = staffFoodEntriesModel;