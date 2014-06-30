'use strict';

//Apologies service used to communicate Apologies REST endpoints
angular.module('apologies').factory('Apologies', ['$resource',
	function($resource) {
		return $resource('apologies/:apologyId', { apologyId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);