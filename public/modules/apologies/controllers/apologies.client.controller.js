'use strict';

// Apologies controller
angular.module('apologies').controller('ApologiesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Apologies',
	function($scope, $stateParams, $location, Authentication, Apologies ) {
		$scope.authentication = Authentication;

		// Create new Apology
		$scope.create = function() {
			// Create new Apology object
			var apology = new Apologies ({
				name: this.name
			});

			// Redirect after save
			apology.$save(function(response) {
				$location.path(ApplicationConfiguration.apiRoot + 'apologies/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

			// Clear form fields
			this.name = '';
		};

		// Remove existing Apology
		$scope.remove = function( apology ) {
			if ( apology ) { apology.$remove();

				for (var i in $scope.apologies ) {
					if ($scope.apologies [i] === apology ) {
						$scope.apologies.splice(i, 1);
					}
				}
			} else {
				$scope.apology.$remove(function() {
					$location.path('apologies');
				});
			}
		};

		// Update existing Apology
		$scope.update = function() {
			var apology = $scope.apology ;

			apology.$update(function() {
				$location.path(ApplicationConfiguration.apiRoot + 'apologies/' + apology._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Apologies
		$scope.find = function() {
			$scope.apologies = Apologies.query();
		};

		// Find existing Apology
		$scope.findOne = function() {
			$scope.apology = Apologies.get({ 
				apologyId: $stateParams.apologyId
			});
		};
	}
]);