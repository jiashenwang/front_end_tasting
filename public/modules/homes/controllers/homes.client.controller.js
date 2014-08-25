'use strict';

// Homes controller
angular.module('homes').controller('HomesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Homes',
	function($scope, $stateParams, $location, Authentication, Homes ) {
		$scope.authentication = Authentication;

		// Create new Home
		$scope.create = function() {
			// Create new Home object
			var home = new Homes ({
				name: this.name
			});

			// Redirect after save
			home.$save(function(response) {
				$location.path('homes/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Home
		$scope.remove = function( home ) {
			if ( home ) { home.$remove();

				for (var i in $scope.homes ) {
					if ($scope.homes [i] === home ) {
						$scope.homes.splice(i, 1);
					}
				}
			} else {
				$scope.home.$remove(function() {
					$location.path('homes');
				});
			}
		};

		// Update existing Home
		$scope.update = function() {
			var home = $scope.home ;

			home.$update(function() {
				$location.path('homes/' + home._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Homes
		$scope.find = function() {
			$scope.homes = Homes.query();
		};

		// Find existing Home
		$scope.findOne = function() {
			$scope.home = Homes.get({ 
				homeId: $stateParams.homeId
			});
		};
	}
]);