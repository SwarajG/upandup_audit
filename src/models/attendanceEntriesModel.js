const mongoose = require('mongoose');
const attendanceEntrieSchema = require('../schema/attendanceEntries');

const attendanceEntriesModel = mongoose.model('attendance_entries', attendanceEntrieSchema);

module.exports = attendanceEntriesModel;

