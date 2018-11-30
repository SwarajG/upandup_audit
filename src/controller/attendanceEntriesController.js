const mongoose = require('mongoose');
const userEntries = require('../models/usersModel');
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
			const users = filteredAttendanceEntries.map(entry => mongoose.Types.ObjectId(entry.userId));
			userEntries.find({
				'_id': { $in: users}
			}, (err, users) => {
				const combinedData = filteredAttendanceEntries.map((entry) => {
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
		attendanceEntries.create(req.body, (err, attendanceEntry) => {
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