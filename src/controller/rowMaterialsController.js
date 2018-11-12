const rowMaterials = require('../models/rowMaterialsModel');

const rowMaterialsController = {

	getAll: async (req, res, next) => {
		rowMaterials.find({}, (err, rowMaterial) => {
			if (err) return res.json(err);
			res.json(rowMaterial);
		});
	},

	getOne: (req, res, next) => {
		rowMaterials.findById(req.params.id, (err, rowMaterial) => {
			res.json(rowMaterial || {});
		});
	},

	create: (req, res, next) => {
		rowMaterials.create(req.body, function (err, rowMaterial) {
			if (err) return res.json(err);
			res.json(rowMaterial)
		})
	},

	update: (req, res, next) => {
		rowMaterials.findOneAndUpdate({ _id: req.params.id }, req.body, {
			upsert: true,
			new: true
		}, (err, rowMaterial) => {
			if (err) return res.json(err);
			res.json(rowMaterial)
		});
	},

	delete: (req, res, next) => {
		rowMaterials.remove({
			_id: req.params.id
		}, (err, ok) => {
			if (err) return res.json(err);
		});
		res.json(true)
	}
};

module.exports = rowMaterialsController;