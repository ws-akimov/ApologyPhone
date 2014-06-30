'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Apology Schema
 */
var ApologySchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Apology name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Apology', ApologySchema);