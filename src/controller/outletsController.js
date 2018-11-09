const outlets = require('../models/outletsModel');

const outletsController = {

	getAll: async (req, res, next) => {
		outlets.find({}, (err, outlet) => {
			if (err) return res.json(err);
			res.json(outlet);
		});
	},

	getOne: (req, res, next) => {
		outlets.findById(req.params.id, (err, outlet) => {
			res.json(outlet || {});
		});
	},

	create: (req, res, next) => {
		outlets.create(req.body, function (err, outlet) {
			if (err) return res.json(err);
			res.json(outlet)
		})
	},

	update: (req, res, next) => {
		outlets.findOneAndUpdate(req.params.id, req.body, {
			new: true
		}, (err, outlet) => {
			if (err) return res.json(err);
			res.json(outlet)
		});
	},

	delete: (req, res, next) => {
		outlets.remove({
			_id: req.params.id
		}, (err, ok) => {
			if (err) return res.json(err);
		});
		res.json(true)
	}
};

module.exports = outletsController;