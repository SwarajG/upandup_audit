const stockTransferEntries = require('../models/stockTransferEntriesModel');

const stockTransferEntriesController = {

	getAll: async (req, res, next) => {
		stockTransferEntries.find({}, (err, stockTransferEntrie) => {
			if (err) return res.json(err);
			res.json(stockTransferEntrie);
		});
	},

	getOne: (req, res, next) => {
		stockTransferEntries.findById(req.params.id, (err, stockTransferEntrie) => {
			res.json(stockTransferEntrie || {});
		});
	},

	getForDate: async (req, res, next) => {
		const { date, fromOutletId } = req.body;
		console.log(date, fromOutletId);
		stockTransferEntries.find({
			fromOutletId,
			entryDate: date
		}, (err, stockTransferEntry) => {
			if (err) return res.json(err);
			res.json(stockTransferEntry);
		});
	},

	create: (req, res, next) => {
		stockTransferEntries.create(req.body, function (err, stockTransferEntrie) {
			if (err) return res.json(err);
			res.json(stockTransferEntrie)
		})
	},

	update: (req, res, next) => {
		stockTransferEntries.findOneAndUpdate(req.params.id, req.body, {
			new: true
		}, (err, stockTransferEntrie) => {
			if (err) return res.json(err);
			res.json(stockTransferEntrie)
		});
	},

	delete: (req, res, next) => {
		stockTransferEntries.remove({
			_id: req.params.id
		}, (err, ok) => {
			if (err) return res.json(err);
		});
		res.json(true)
	}
};

module.exports = stockTransferEntriesController;