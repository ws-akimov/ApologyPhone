'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', '$upload', '$http', 'Apologies', '$sce',
	function($scope, Authentication, $upload, $http, Apologies, $sce) {
		// This provides Authentication context.
		$scope.authentication = Authentication;


    }
]);