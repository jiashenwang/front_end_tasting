/*'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Users', ['$resource',
	function($resource) {
		return $resource('users', {}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
*/
'use strict';

// Users service used for communicating with the users REST endpoint
var loginServices = angular.module('users').factory('Users', ['$resource',
	function($resource) {
		return {
			login : $resource('http://54.191.199.150/api/account/login', null, {
				query: {method: 'POST'}
			}),
			signup : $resource('http://54.191.199.150/api/account/owners', null, {
				query: {method: 'POST'}
			}),
			collaborators_signup : $resource('http://54.191.199.150/api/account/collaborators', null, {
				query: {method: 'POST'}
			}),	
			parents_signup : $resource('http://54.191.199.150/api/account/parents', null, {
				query: {method: 'POST'}
			}),	
			update_password : $resource('http://54.191.199.150/api/account/update_password', null, {
				query: {method: 'PATCH'}
			}),												
			accept : $resource('api/taxis/accept', null, {
				query: {method: 'POST'}
			})
		}
	}
]);