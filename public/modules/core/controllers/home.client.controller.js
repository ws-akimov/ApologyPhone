'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

	 //    $scope.volumeLevel = 0;
	 //    $scope.currentEditedSoundIndex = 0;

		// $scope.startUserMedia = function (stream) {
		//   $scope.input = $scope.audio_context.createMediaStreamSource(stream);
		//   console.log('Media stream created.');

		//   $scope.volume = $scope.audio_context.createGainNode();
		//   $scope.volume.gain.value = $scope.volumeLevel;
		//   $scope.input.connect($scope.volume);
		//   $scope.volume.connect($scope.audio_context.destination);
		//   console.log('Input connected to audio context destination.');
		  
		//   $scope.recorder = new Recorder($scope.input, {
		//   	workerPath: '/lib/Recorderjs/recorderWorker.js'
		//   });
		//   console.log('Recorder initialised.', $scope.recorder);
		// };

		// $scope.changeVolume = function () {
		//   if (!$scope.volume) return;
		//   $scope.volumeLevel = $scope.value;
		//   $scope.volume.gain.value = $scope.value;
		// };

		// $scope.startRecording = function () {
		//   $scope.recorder.record();
		//   console.log('Recording...');
		// };

		// $scope.stopRecording = function () {
		//   $scope.recorder.stop();
		//   console.log('Stopped recording.');
		  
		//   // create WAV download link using audio data blob
		//   $scope.createDownloadLink();
		  
		//   $scope.recorder.clear();
		// };

		// $scope.createDownloadLink = function () {
		//   $scope.currentEditedSoundIndex = -1;
		//   $scope.recorder && $scope.recorder.exportWAV($scope.handleWAV.bind(this));
		// };

		// $scope.handleWAV = function (blob) {
		// 	console.log('handleWAV', blob);
		// $scope.blob = blob;
		//   $scope.tableRef = document.getElementById('recordingslist');
		//   console.log('handleWAV', $scope.tableRef);
		//   if ($scope.currentEditedSoundIndex !== -1) {
		//     $('#recordingslist tr:nth-child(' + ($scope.currentEditedSoundIndex + 1) + ')').remove();
		//   }

		//   $scope.url = URL.createObjectURL(blob);
		//   //$scope.newRow.className = 'soundBite';
		//   $scope.audioElement = document.createElement('audio');
		//   $scope.downloadAnchor = document.createElement('a');
		//   //$scope.editButton = document.createElement('button');
		  
		//   $scope.audioElement.controls = true;
		//   $scope.audioElement.src = $scope.url;
		//   angular.element(document.getElementById('recordingslist')).append(angular.element($scope.audioElement));
		//   $scope.downloadAnchor.href = $scope.url;
		//   $scope.downloadAnchor.download = new Date().toISOString() + '.wav';
		//   $scope.downloadAnchor.innerHTML = 'Download';
		//   $scope.downloadAnchor.className = 'btn btn-primary';
		//   console.log($scope.url);
		//   // editButton.innerHTML = 'Edit';
		//   // editButton.className = 'btn btn-primary';

		//   // $scope.newCell = $scope.newRow.insertCell(-1);
		//   // $scope.newCell.appendChild($scope.audioElement);
		//   // $scope.newCell = $scope.newRow.insertCell(-1);
		//   // $scope.newCell.appendChild($scope.downloadAnchor);
		//   // $scope.newCell = $scope.newRow.insertCell(-1);
		//   // // $scope.newCell.appendChild(editButton);

		//   // $scope.newCell = $scope.newRow.insertCell(-1);
		//   // $scope.toggler;
		//   // for (var i = 0, l = 8; i < l; i++) {
		//   //   $scope.toggler = document.createElement('input');
		//   //   $($scope.toggler).attr('type', 'checkbox');
		//   //   $scope.newCell.appendChild($scope.toggler);
		//   // }
		// };

		// $scope.editButton = function() {
		//     // $('.recorder.container').addClass('hide');
		//     // $('.editor.container').removeClass('invisible');

		//     // currentEditedSoundIndex = $(e.target).closest('tr').index();
		    
		//     $scope.f = new FileReader();
		//     $scope.f.onload = function(e) {
		//         $scope.audio_context.decodeAudioData($scope.blob, function(buffer) {
		//           console.warn(buffer);
		//           //$('#audioLayerControl')[0].handleAudio(buffer);
		//         }, function(e) {
		//           console.warn(e);
		//         });
		//     };
		//     $scope.f.readAsArrayBuffer($scope.blob);
		//     console.log('asdasda', $scope.blob);
		//   };

		// window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
		// navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.device.capture;
		// window.URL = window.URL || window.webkitURL || window.mozURL;

		// $scope.audio_context = new AudioContext();
		// console.log('Audio context set up.');
		// console.log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
		  
		// navigator.getUserMedia({audio: true}, $scope.startUserMedia, function(e) {
		// 	console.warn('No live audio input: ' + e);
		// });

	}
]);