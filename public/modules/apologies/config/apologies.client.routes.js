'use strict';

//Setting up route
angular.module('apologies').config(['$stateProvider',
	function($stateProvider) {
		// Apologies state routing
		$stateProvider.
		state('listApologies', {
			url: '/apologies',
			templateUrl: 'apologies/views/list-apologies.client.view.html'
		}).
		state('createApology', {
			url: '/apologies/create',
			templateUrl: 'apologies/views/create-apology.client.view.html'
		}).
		state('viewApology', {
			url: '/apologies/:apologyId',
			templateUrl: 'apologies/views/view-apology.client.view.html'
		}).
		state('editApology', {
			url: '/apologies/:apologyId/edit',
			templateUrl: 'apologies/views/edit-apology.client.view.html'
		});
	}
]);