'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus', '$http',
	function($scope, Authentication, Menus, $http) {
		$scope.authentication = Authentication;
		$scope.$watch('$scope.authentication', function(){
			console.log(Authentication);
		})
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');


		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});


		$scope.$watch('$scope.authentication.notifications',function () {
			console.log($scope.authentication.notifications);
			if ($scope.authentication.notifications > 0) {
				$scope.isNotification = true;
				$scope.notificationsCount = $scope.authentication.notifications;
			} else {
				$scope.isNotification = false;
				$scope.notificationsCount = $scope.authentication.notifications;	
			}
		});
		
		// if (user) {
		// 	if (user.isAllInformation === false) {
		// 		$location.path('settings/accounts/');
		// 	}
		// }
	}
]);