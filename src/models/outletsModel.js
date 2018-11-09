const mongoose = require('mongoose');
const outletsSchema = require('../schema/outlets');

const outletsModel = mongoose.model('outlets', outletsSchema);

module.exports = outletsModel;