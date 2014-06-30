'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Apology = mongoose.model('Apology'),
	_ = require('lodash');

/**
 * Get the error message from error object
 */
var getErrorMessage = function(err) {
	var message = '';

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'Apology already exists';
				break;
			default:
				message = 'Something went wrong';
		}
	} else {
		for (var errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	return message;
};

/**
 * Create a Apology
 */
exports.create = function(req, res) {
	var apology = new Apology(req.body);
	apology.user = req.user;

	apology.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(apology);
		}
	});
};

/**
 * Show the current Apology
 */
exports.read = function(req, res) {
	res.jsonp(req.apology);
};

/**
 * Update a Apology
 */
exports.update = function(req, res) {
	var apology = req.apology ;

	apology = _.extend(apology , req.body);

	apology.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(apology);
		}
	});
};

/**
 * Delete an Apology
 */
exports.delete = function(req, res) {
	var apology = req.apology ;

	apology.remove(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(apology);
		}
	});
};

/**
 * List of Apologies
 */
exports.list = function(req, res) { Apology.find().sort('-created').populate('user', 'displayName').exec(function(err, apologies) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(apologies);
		}
	});
};

/**
 * Apology middleware
 */
exports.apologyByID = function(req, res, next, id) { Apology.findById(id).populate('user', 'displayName').exec(function(err, apology) {
		if (err) return next(err);
		if (! apology) return next(new Error('Failed to load Apology ' + id));
		req.apology = apology ;
		next();
	});
};

/**
 * Apology authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.apology.user.id !== req.user.id) {
		return res.send(403, 'User is not authorized');
	}
	next();
};