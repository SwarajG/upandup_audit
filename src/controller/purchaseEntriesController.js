const purchaseEntries = require('../models/purchaseEntriesModel');
const moment = require('moment');

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
		const formatedDate = moment(date).format('YYYY-MM-DD');
		const [ year, month, dateOfMonth ] = formatedDate.split('-');
		const tomorrow = moment().add(1, 'd').format('YYYY-MM-DD');
		const [ tomorrowYear, tomorrowMonth, tomorrowDateOfMonth ] = tomorrow.split('-');
		purchaseEntries.find({
			outletId,
			createAt: {
				$lt: new Date(tomorrowYear, tomorrowMonth - 1, tomorrowDateOfMonth),
				$gt: new Date(year, month - 1, dateOfMonth)
			}
		}, (err, purchaseEntrie) => {
			if (err) return res.json(err);
			res.json(purchaseEntrie);
		});
	},

	create: (req, res, next) => {
		purchaseEntries.create(req.body, function (err, purchaseEntrie) {
			if (err) return res.json(err);
			res.json(purchaseEntrie)
		})
	},

	update: (req, res, next) => {
		purchaseEntries.findOneAndUpdate(req.params.id, req.body, {
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