const mongoose = require('mongoose');
const userEntries = require('../models/usersModel');
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
		}, (err, filteredPurchaseEntrie) => {
			if (err) return res.json(err);
			const users = filteredPurchaseEntrie.map(entry => mongoose.Types.ObjectId(entry.userId));
			userEntries.find({
				'_id': { $in: users}
			}, (err, users) => {
				const combinedData = filteredPurchaseEntrie.map((entry) => {
					const user = users.find(user => user._id.toString() === entry.userId);
					const jsonUser = user && user.toJSON() || [];
					const jsonEntry = entry && entry.toJSON() || {};
					return {
						...jsonEntry,
						firstName: jsonUser.firstName,
						lastName: jsonUser.lastName,
						email: jsonUser.email
					};
				});
				res.json(combinedData);
			})
		});
		
	},

	create: (req, res, next) => {
		inventoryCoutings.create(req.body, function (err, inventoryCouting) {
			if (err) return res.json(err);
			res.json(inventoryCouting)
		})
	},

	update: (req, res, next) => {
		inventoryCoutings.findOneAndUpdate({ _id: req.params.id }, req.body, {
			upsert: true,
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