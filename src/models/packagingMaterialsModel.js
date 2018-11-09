const mongoose = require('mongoose');
const packagingMaterialSchema = require('../schema/packagingMaterials');

const packagingMaterialsModel = mongoose.model('packaging_materials', packagingMaterialSchema);

module.exports = packagingMaterialsModel;