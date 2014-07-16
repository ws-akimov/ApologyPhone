'use strict';


angular.module('core').controller('PlaybackController', ['$scope', 'Authentication', '$upload', '$http', 'Apologies', '$sce',
	function($scope, Authentication, $upload, $http, Apologies, $sce) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

        $http.get(ApplicationConfiguration.apiRoot + '/apologies').success(function(response) {
            $scope.apologies = response;
            $scope.myApologies = [];
            $scope.forMeApologies = [];
            _.forEach($scope.apologies, function (apology) {
                apology.path = $sce.trustAsResourceUrl(apology.path);
                if (apology.user == $scope.authentication.user._id) {
                    $scope.myApologies.push(apology);
                } else {
                    $scope.forMeApologies.push(apology);
                }
            });
        }).error(function(response) {
            $scope.error = response.message;
        });

        $scope.listened = function (apology) {
            $http.put(ApplicationConfiguration.apiRoot + '/apologies/' + apology._id).success(function(response) {
                console.log(response);
            }).error(function(response) {
                $scope.error = response.message;
            });
        }
    }
]);