'use strict';

angular.module('apologies').directive('create', ['$timeout', '$http',
	function($timeout, $http) {
		return {
			restrict: 'A',
			link: function postLink(scope, element, attrs) {

				var changeRadio = function (e) {
					if (attrs.create == 'username') {
						if (scope.seletedType != 'username') {
							scope.seletedType = 'username';
						}
					}	else if (attrs.create == 'email') {
						if (scope.seletedType != 'email') {
							scope.seletedType = 'email';
						}
					}
				}

				element.bind('keypress', function(e) {
					changeRadio(e);
				})
				element.bind('click', function(e) {
					changeRadio(e);
				})
				element.bind('focus', function(e) {
					changeRadio(e);
				})
			}
		};
	}
]);