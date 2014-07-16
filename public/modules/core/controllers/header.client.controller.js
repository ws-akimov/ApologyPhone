'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus', '$http', '$rootScope',
	function($scope, Authentication, Menus, $http, $rootScope) {
		$rootScope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');


		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});

		
		// if (user) {
		// 	if (user.isAllInformation === false) {
		// 		$location.path('settings/accounts/');
		// 	}
		// }
	}
]);