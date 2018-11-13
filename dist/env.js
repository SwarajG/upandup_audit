"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var mongoUrl = function mongoUrl() {
	var mongodbUser = process.env.MONGO_USER;
	var mongodbPWd = process.env.MONGO_PWD;
	var mongodbDataBase = process.env.DB_NAME;
	var mongodbConnection = process.env.MONGO_URL + ":" + process.env.MONGO_PORT;
	console.log("mongodb://" + mongodbUser + ":" + mongodbPWd + "@" + mongodbConnection + "/" + mongodbDataBase);
	return "mongodb://" + mongodbUser + ":" + mongodbPWd + "@" + mongodbConnection + "/" + mongodbDataBase;
};

exports.default = {
	Api_port: 3000, // Your Free Port For this server
	DB_URL: mongoUrl()
};
//# sourceMappingURL=env.js.map