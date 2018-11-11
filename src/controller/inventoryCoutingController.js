const inventoryCoutings = require('../models/inventoryCoutingModel');

const inventoryCoutingController = {

	getAll: async (req, res, next) => {
		inventoryCoutings.find({}, (err, inventoryCouting) => {
			if (err) return res.json(err);
			res.json(inventoryCouting);
		});
	},

	getOne: (req, res, next) => {
		inventoryCoutings.findById(req.params.id, (err, inventoryCouting) => {
			res.json(inventoryCouting || {});
		});
	},

	getForDate: async (req, res, next) => {
		const { date, outletId } = req.body;
		inventoryCoutings.find({
			outletId,
			entryDate: date
		}, (err, purchaseEntrie) => {
			if (err) return res.json(err);
			res.json(purchaseEntrie);
		});
	},

	create: (req, res, next) => {
		inventoryCoutings.create(req.body, function (err, inventoryCouting) {
			if (err) return res.json(err);
			res.json(inventoryCouting)
		})
	},

	update: (req, res, next) => {
		inventoryCoutings.findOneAndUpdate(req.params.id, req.body, {
			new: true
		}, (err, inventoryCouting) => {
			if (err) return res.json(err);
			res.json(inventoryCouting)
		});
	},

	delete: (req, res, next) => {
		inventoryCoutings.remove({
			_id: req.params.id
		}, (err, ok) => {
			if (err) return res.json(err);
		});
		res.json(true)
	}
};

module.exports = inventoryCoutingController;