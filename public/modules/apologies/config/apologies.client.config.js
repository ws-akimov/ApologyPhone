'use strict';

//Configuring the Articles module
angular.module('apologies').run(['Menus',
	function(Menus) {
		//Set top bar menu items
		Menus.addMenuItem('topbar', 'Apologies', 'apologies', 'dropdown', '/apologies(/create)?');
		Menus.addSubMenuItem('topbar', 'apologies', 'List Apologies', 'playback');
		Menus.addSubMenuItem('topbar', 'apologies', 'New Apology', 'apologies/create');
	}
]);