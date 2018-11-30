const mongoose = require('mongoose');
const userEntries = require('../models/usersModel');
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
		stockTransferEntries.find({
			fromOutletId,
			entryDate: date
		}, (err, filteredStockTransferEntry) => {
			if (err) return res.json(err);
			const users = filteredStockTransferEntry.map(entry => mongoose.Types.ObjectId(entry.userId));
			userEntries.find({
				'_id': { $in: users}
			}, (err, users) => {
				const combinedData = filteredStockTransferEntry.map((entry) => {
					const user = users.find(user => user._id.toString() === entry.userId).toJSON();
					return {
						...entry.toJSON(),
						firstName: user.firstName,
						lastName: user.lastName,
						email: user.email
					};
				});
				res.json(combinedData);
			});
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