'use strict';

//Apologies service used to communicate Apologies REST endpoints
angular.module('apologies').factory('Apologies', ['$resource',
	function($resource) {
		return $resource(ApplicationConfiguration.apiRoot + '/apologies/:apologyId', { apologyId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);