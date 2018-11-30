const mongoose = require('mongoose');
const userEntries = require('../models/usersModel');
const purchaseEntries = require('../models/purchaseEntriesModel');


const purchaseEntriesController = {

	getAll: async (req, res, next) => {
		purchaseEntries.find({}, (err, purchaseEntrie) => {
			if (err) return res.json(err);
			res.json(purchaseEntrie);
		});
	},

	getOne: (req, res, next) => {
		purchaseEntries.findById(req.params.id, (err, purchaseEntrie) => {
			res.json(purchaseEntrie || {});
		});
	},

	getForDate: async (req, res, next) => {
		const { date, outletId } = req.body;
		purchaseEntries.find({
			outletId,
			entryDate: date
		}, (err, filteredPurchaseEntrie) => {
			if (err) return res.json(err);
			const users = filteredPurchaseEntrie.map(entry => mongoose.Types.ObjectId(entry.userId));
			userEntries.find({
				'_id': { $in: users }
			}, (err, users) => {
				const combinedData = filteredPurchaseEntrie.map((entry) => {
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
		purchaseEntries.create(req.body, function (err, purchaseEntrie) {
			if (err) return res.json(err);
			res.json(purchaseEntrie)
		})
	},

	update: (req, res, next) => {
		purchaseEntries.findOneAndUpdate({ _id: req.params.id }, req.body, {
			upsert: true,
			new: true
		}, (err, purchaseEntrie) => {
			if (err) return res.json(err);
			res.json(purchaseEntrie)
		});
	},

	delete: (req, res, next) => {
		purchaseEntries.remove({
			_id: req.params.id
		}, (err, ok) => {
			if (err) return res.json(err);
		});
		res.json(true)
	}
};

module.exports = purchaseEntriesController;