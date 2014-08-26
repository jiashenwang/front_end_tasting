'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Users' ,'Authentication',
	function($scope, $http, $location, Users, Authentication) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');



		$scope.signup = function() {
			console.log($scope.credentials.email);
			Users.signup.query({

				"center_name": $scope.credentials.center_name,//center_name和invitation_code不能同时为空
				"logo_media_id": $scope.credentials.logo_media_id,//相对路径
				"timezone":"GMT+08:00",
				"invitation_token": $scope.credentials.invitation_token,
				"display_name": $scope.credentials.display_name,
				"email": $scope.credentials.email,//Required
				"password": $scope.credentials.password//Required，至少六位		
						
			},function(data){
				console.log(data);
			})			
			/*
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});*/
		};

		$scope.signin = function(){
			console.log($scope.credentials.email);
			Users.login.query({
				"email" : $scope.credentials.email,
				"password" : $scope.credentials.password
			},function(data){
				//$scope.authentication.user:data.display_name;
				console.log(data);
				$location.path('/');
			})
		};
		/*
		 $scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials.email).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};*/

		// colllaborators sign up
		$scope.collaborators_signup = function() {
			console.log($scope.credentials.email);
			Users.collaborators_signup.query({

				"invitation_token": $scope.credentials.invitation_token,
				"display_name": $scope.credentials.display_name,
				"email": $scope.credentials.email,//Required
				"password": $scope.credentials.password//Required，至少六位		
						
			},function(data){
				console.log(data);
			})			
		};	

		// parents sign up
		$scope.parents_signup = function() {
			console.log($scope.credentials.email);
			Users.parents_signup.query({

				"invitation_token": $scope.credentials.invitation_token,
				"display_name": $scope.credentials.display_name,
				"email": $scope.credentials.email,//Required
				"password": $scope.credentials.password//Required，至少六位		
						
			},function(data){
				console.log(data);
			})			
		};				

	}
]);