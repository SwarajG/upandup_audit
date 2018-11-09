const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const config = require('../config');

mongoose.connect(config.mongodbUrl, {useMongoClient: true});

autoIncrement.initialize(mongoose.connection);

// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection opened');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

module.exports = mongoose;