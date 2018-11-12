const packagingMaterials = require('../models/packagingMaterialsModel');

const packagingMaterialsController = {

	getAll: async (req, res, next) => {
		packagingMaterials.find({}, (err, packagingMaterial) => {
			if (err) return res.json(err);
			res.json(packagingMaterial);
		});
	},

	getOne: (req, res, next) => {
		packagingMaterials.findById(req.params.id, (err, packagingMaterial) => {
			res.json(packagingMaterial || {});
		});
	},

	create: (req, res, next) => {
		packagingMaterials.create(req.body, function (err, packagingMaterial) {
			if (err) return res.json(err);
			res.json(packagingMaterial)
		})
	},

	update: (req, res, next) => {
		packagingMaterials.findOneAndUpdate({ _id: req.params.id }, req.body, {
			upsert: true,
			new: true
		}, (err, packagingMaterial) => {
			if (err) return res.json(err);
			res.json(packagingMaterial)
		});
	},

	delete: (req, res, next) => {
		packagingMaterials.remove({
			_id: req.params.id
		}, (err, ok) => {
			if (err) return res.json(err);
		});
		res.json(true)
	}
};

module.exports = packagingMaterialsController;