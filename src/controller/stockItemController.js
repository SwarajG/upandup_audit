const stockItems = require('../models/stockItemsModel');
const moment = require('moment');

const stockItemsController = {

	getAll: async (req, res, next) => {
		stockItems.find({}, (err, stockItem) => {
			if (err) return res.json(err);
			res.json(stockItem);
		});
	},

	getOne: (req, res, next) => {
		stockItems.findById(req.params.id, (err, stockItem) => {
			res.json(stockItem || {});
		});
	},

	create: (req, res, next) => {
		stockItems.create(req.body, function (err, stockItem) {
			if (err) return res.json(err);
			res.json(stockItem)
		})
	},

	update: (req, res, next) => {
		stockItems.findOneAndUpdate({ _id: req.params.id }, req.body, {
			upsert: true,
			new: true
		}, (err, stockItem) => {
			if (err) return res.json(err);
			res.json(stockItem)
		});
	},

	delete: (req, res, next) => {
		stockItems.remove({
			_id: req.params.id
		}, (err, ok) => {
			if (err) return res.json(err);
		});
		res.json(true)
	}
};

module.exports = stockItemsController;