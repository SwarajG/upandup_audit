const mongoose = require('mongoose');
const userSchema = require('../schema/users');

const usersModel = mongoose.model('users', userSchema);

module.exports = usersModel;