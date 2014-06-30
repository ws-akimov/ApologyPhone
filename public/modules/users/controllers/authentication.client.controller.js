'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		//If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		$scope.signup = function() {
			$http.post(ApplicationConfiguration.apiRoot + '/auth/signup', $scope.credentials).success(function(response) {
				//If successful we assign the response to the global user model
				$scope.authentication.user = response;

				//And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post(ApplicationConfiguration.apiRoot + '/auth/signin', $scope.credentials).success(function(response) {
				//If successful we assign the response to the global user model
				$scope.authentication.user = response;

				//And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.forgotPassword = function() {
			$scope.success = $scope.error = null;

			$http.post(ApplicationConfiguration.apiRoot + '/users/forgot', $scope.forgot).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.forgot = null;
				$location.path('/signin');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);