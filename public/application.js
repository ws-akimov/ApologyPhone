'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName)
.config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
])
.run(function($rootScope, $http) {

	var checkNotifications = function () {
		$http.get(ApplicationConfiguration.apiRoot + '/check/notification').success(function(response) {
			$rootScope.authentication.notifications = response;
		}).error(function(response) {
			console.log(response.message);
		});
	}

	$rootScope.$watch('authentication.user', function () {
		if ($rootScope.authentication.user !== undefined) {
			checkNotifications();
		}
	});

	$rootScope.$watch('authentication.notifications', function () {
		if ($rootScope.authentication.notifications > 0) {
			$rootScope.isNotification = true;
			$rootScope.notificationsCount = $rootScope.authentication.notifications;
		} else {
			$rootScope.isNotification = false;
			$rootScope.notificationsCount = $rootScope.authentication.notifications;	
		}
	});

	$rootScope.$on('$locationChangeStart', function(next, current) { 
		if ($rootScope.authentication.user !== undefined) {
			checkNotifications();
		}
 	});
});

//Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	//Then init the app
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});