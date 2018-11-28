const attendanceEntries = require('../models/attendanceEntriesModel');

const attendanceEntryController = {

	getAll: async (req, res, next) => {
		attendanceEntries.find({}, (err, attendanceEntry) => {
			if (err) return res.json(err);
			res.json(attendanceEntry);
		});
	},

	getOne: (req, res, next) => {
		attendanceEntries.findById(req.params.id, (err, attendanceEntry) => {
			res.json(attendanceEntry || {});
		});
	},

	getForDate: async (req, res, next) => {
		const { date, outletId } = req.body;
		attendanceEntries.find({
			outletId,
			entryDate: date
		}, (err, filteredAttendanceEntries) => {
			if (err) return res.json(err);
			res.json(filteredAttendanceEntries);
		});
	},

	create: (req, res, next) => {
		attendanceEntries.create(req.body, (err, attendanceEntry) => {
			console.log(req.body);
			if (err) return res.json(err);
			res.json(attendanceEntry)
		})
	},

	update: (req, res, next) => {
		attendanceEntries.findOneAndUpdate({ _id: req.params.id }, req.body, {
			upsert: true,
			new: true
		}, (err, attendanceEntry) => {
			if (err) return res.json(err);
			res.json(attendanceEntry)
		});
	},

	delete: (req, res, next) => {
		attendanceEntries.remove({
			_id: req.params.id
		}, (err, ok) => {
			if (err) return res.json(err);
		});
		res.json(true)
	}
};

module.exports = attendanceEntryController;