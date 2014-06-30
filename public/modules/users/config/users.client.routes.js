'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('forgot-password', {
			url: '/forgot-password',
			templateUrl: 'users/views/forgot-password.client.view.html'
		}).
		state('profile', {
			url: '/settings/profile',
			templateUrl: 'users/views/settings/edit-profile.client.view.html'
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'users/views/settings/social-accounts.client.view.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'users/views/signup.client.view.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'users/views/signin.client.view.html'
		});
	}
]);