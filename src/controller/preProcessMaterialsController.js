const preProcessMaterials = require('../models/preProcessMaterialsModel');

const preProcessMaterialsController = {

	getAll: async (req, res, next) => {
		preProcessMaterials.find({}, (err, preProcessMaterial) => {
			if (err) return res.json(err);
			res.json(preProcessMaterial);
		});
	},

	getOne: (req, res, next) => {
		preProcessMaterials.findById(req.params.id, (err, preProcessMaterial) => {
			res.json(preProcessMaterial || {});
		});
	},

	create: (req, res, next) => {
		preProcessMaterials.create(req.body, function (err, preProcessMaterial) {
			if (err) return res.json(err);
			res.json(preProcessMaterial)
		})
	},

	update: (req, res, next) => {
		preProcessMaterials.findOneAndUpdate({ _id: req.params.id }, req.body, {
			upsert: true,
			new: true
		}, (err, preProcessMaterial) => {
			if (err) return res.json(err);
			res.json(preProcessMaterial)
		});
	},

	delete: (req, res, next) => {
		preProcessMaterials.remove({
			_id: req.params.id
		}, (err, ok) => {
			if (err) return res.json(err);
		});
		res.json(true)
	}
};

module.exports = preProcessMaterialsController;