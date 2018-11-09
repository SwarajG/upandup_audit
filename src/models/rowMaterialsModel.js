const mongoose = require('mongoose');
const rowMaterialSchema = require('../schema/rowMaterials');

const rowMaterialsModel = mongoose.model('row_materials', rowMaterialSchema);

module.exports = rowMaterialsModel;