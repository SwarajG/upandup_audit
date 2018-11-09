const mongoose = require('mongoose');
const preProcessMaterialSchema = require('../schema/preProcessMaterials');

const preProcessMaterialsModel = mongoose.model('preProcess_materials', preProcessMaterialSchema);

module.exports = preProcessMaterialsModel;