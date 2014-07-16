'use strict';

// Apologies controller
angular.module('apologies').controller('ApologiesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Apologies', '$http',
	function($scope, $stateParams, $location, Authentication, Apologies, $http) {
		$scope.authentication = Authentication;

		$scope.seletedType = 'username';
		$scope.receipient = 'nobody';
		$scope.isEmpty = true;
		$scope.users = [];

		$scope.$watch('email', function () {
			if ($scope.email === '' || $scope.email === undefined) {
				if ($scope.seletedType === 'email') {
					$scope.isEmpty = true;
				}
			} else {
				if ($scope.seletedType === 'email') {
					$scope.isEmpty = false;
				}
			}
		})

		 var captureSuccess = function (mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                $scope.uploadFile(mediaFiles[i]);
            }
        }


        var captureError = function (error) {
            var msg = 'An error occurred during capture: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        }

        $scope.captureAudio = function () {
            navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 1, duration: 30});
        }

        $scope.uploadFile = function (mediaFile) {
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=mediaFile.name;
            options.mimeType="audio/wav"
            options.chunkedMode = false;
            if ($scope.seletedType === 'username') {
            	if ($scope.username !== undefined && $scope.username !== '') {
	            	options.params = {
		                'username': $scope.username,
		                'selectedType': $scope.seletedType
	            	};
            	} else{
            		return null;
            	}
            } else if ($scope.seletedType === 'email') {
            	if ($scope.email !== undefined && $scope.email !== '') {
	            	options.params = {
		                'email': $scope.email,
		                'selectedType': $scope.seletedType
	            	};
            	} else {
            		return null;
            	}
            }

            var ft = new FileTransfer();
            ft.upload(mediaFile.fullPath, ApplicationConfiguration.apiRoot + '/apologies', function(r) {
                   	console.log( "Upload successful: "+r.bytesSent+" bytes uploaded.");
                   }, function(error) {
                   	console.log("Upload failed: Code = "+error.code);
                   }, options, true);

        }


        $scope.updateUsers = function(typed){
        	$scope.users = [];
        	if (typed != '') {
	            $http({ method: 'GET', url: ApplicationConfiguration.apiRoot + '/users/' + $scope.username})
			     .success(function (data,status) {
			     	if (data.length === 1) {
			     		$scope.username = data[0].username;
			     		$scope.isEmpty = false;
			     		$scope.receipient = $scope.username;
			     	} else {
			     		var i = 0;
			     		_.forEach(data, function (d) {
			     			if ($scope.username === d.username) {
			     				$scope.receipient = d.username;
			     				$scope.isEmpty = false;
			     				i++;
			     			} else {
			     				if (i === 0) {
			     					$scope.isEmpty = true;
			     					$scope.receipient = 'nobody';
			     				}
			     			}
			     			$scope.users.push(d.username);
			     		})
			     	}
				});
        	}
        }

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