'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var apologies = require('../../app/controllers/apologies');

	// Apologies Routes
	app.route('/apologies')
		.get(apologies.list)
		.post(users.requiresLogin, apologies.create);

	app.route('/apologies/:apologyId')
		.get(apologies.read)
		.put(users.requiresLogin, apologies.hasAuthorization, apologies.update)
		.delete(users.requiresLogin, apologies.hasAuthorization, apologies.delete);

	// Finish by binding the Apology middleware
	app.param('apologyId', apologies.apologyByID);
};