'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', '$upload', '$http',
	function($scope, Authentication, $upload, $http) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

        var captureSuccess = function (mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                $scope.uploadFile(mediaFiles[i]);
            }
        }

        // Called if something bad happens.
        //
        var captureError = function (error) {
            var msg = 'An error occurred during capture: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        }

        // A button will call this function
        //
        $scope.captureAudio = function () {
            // Launch device camera application,
            // allowing user to capture up to 2 images
            navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 1, duration: 30});
        }

        // Upload files to server
        $scope.uploadFile = function (mediaFile) {
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=mediaFile.name;
            options.mimeType="audio/wav"
            options.chunkedMode = false;
            options.params = { // Whatever you populate options.params with, will be available in req.body at the server-side.
                "description": "Uploaded from my phone"
            };

            // Transfer picture to server
            var ft = new FileTransfer();
            ft.upload(mediaFile.fullPath, ApplicationConfiguration.apiRoot + '/apologies', function(r) {
                   console.log( "Upload successful: "+r.bytesSent+" bytes uploaded.");
                   }, function(error) {
                   console.log("Upload failed: Code = "+error.code);
                   }, options, true);

        }

    }
]);