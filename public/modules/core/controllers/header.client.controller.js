'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus', '$http',
	function($scope, Authentication, Menus, $http) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$http.get(ApplicationConfiguration.apiRoot + '/').success(function(response) {
				$scope.authentication.user = response;
				console.log('SADDDDDDDDD', $scope.authentication);
			});
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