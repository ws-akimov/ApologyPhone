'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('about', {
			url: '/about',
			templateUrl: 'core/views/about.client.view.html'
		}).
		state('feed', {
			url: '/feed',
			templateUrl: 'core/views/feed.client.view.html'
		}).
		state('receiver-playback', {
			url: '/receiver-playback',
			templateUrl: 'core/views/receiver-playback.client.view.html'
		}).
		state('confirmation', {
			url: '/confirmation',
			templateUrl: 'core/views/confirmation.client.view.html'
		}).
		state('playback', {
			url: '/playback',
			templateUrl: 'core/views/playback.client.view.html'
		}).
		state('submission', {
			url: '/submission',
			templateUrl: 'core/views/submission.client.view.html'
		}).
		state('detail', {
			url: '/detail',
			templateUrl: 'core/views/detail.client.view.html'
		}).
		state('share', {
			url: '/share',
			templateUrl: 'core/views/share.client.view.html'
		}).
		state('contact-search', {
			url: '/contact-search',
			templateUrl: 'core/views/contact-search.client.view.html'
		}).
		state('lodaing-page', {
			url: '/lodaing-page',
			templateUrl: 'core/views/lodaing-page.client.view.html'
		}).
		state('home', {
			url: '/',
			templateUrl: 'core/views/home.client.view.html'
		});
	}
]);