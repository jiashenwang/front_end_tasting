'use strict';

//Setting up route
angular.module('homes').config(['$stateProvider',
	function($stateProvider) {
		// Homes state routing
		$stateProvider.
		state('listHomes', {
			url: '/homes',
			templateUrl: 'modules/homes/views/list-homes.client.view.html'
		}).
		state('createHome', {
			url: '/homes/create',
			templateUrl: 'modules/homes/views/create-home.client.view.html'
		}).
		state('viewHome', {
			url: '/homes/:homeId',
			templateUrl: 'modules/homes/views/view-home.client.view.html'
		}).
		state('editHome', {
			url: '/homes/:homeId/edit',
			templateUrl: 'modules/homes/views/edit-home.client.view.html'
		});
	}
]);