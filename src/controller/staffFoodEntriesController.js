const staffFoodEntries = require('../models/staffFoodEntriesModel');

const staffFoodEntriesController = {

	getAll: async (req, res, next) => {
		staffFoodEntries.find({}, (err, staffFoodEntry) => {
			if (err) return res.json(err);
			res.json(staffFoodEntry);
		});
	},

	getOne: (req, res, next) => {
		staffFoodEntries.findById(req.params.id, (err, staffFoodEntry) => {
			res.json(staffFoodEntry || {});
		});
	},

	getForDate: async (req, res, next) => {
		const { date, outletId } = req.body;
		staffFoodEntries.find({
			outletId,
			entryDate: date
		}, (err, filteredStaffFoodEntries) => {
			if (err) return res.json(err);
			res.json(filteredStaffFoodEntries);
		});
	},

	create: (req, res, next) => {
		staffFoodEntries.create(req.body, (err, staffFoodEntry) => {
			if (err) return res.json(err);
			res.json(staffFoodEntry)
		})
	},

	update: (req, res, next) => {
		staffFoodEntries.findOneAndUpdate({ _id: req.params.id }, req.body, {
			upsert: true,
			new: true
		}, (err, staffFoodEntry) => {
			if (err) return res.json(err);
			res.json(staffFoodEntry)
		});
	},

	delete: (req, res, next) => {
		staffFoodEntries.remove({
			_id: req.params.id
		}, (err, ok) => {
			if (err) return res.json(err);
		});
		res.json(true)
	}
};

module.exports = staffFoodEntriesController;