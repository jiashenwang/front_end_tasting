'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.products=[
		  {
		    name: 'test1',
		    color: 'blue',
		    logo: 'dilog',
		    students: [  {
		    name: 'person a',
		    age: '11',
		    meal: 'rice',
		    count: '1',
		  },
		    {
		    name: 'person b',
		    age: '22',
		    meal: 'milk',
		    count: '1',
		  },],
		  },
		    {
		    name: 'test2',
		    color: 'green',
		    logo: 'bar',
		    students: [  {
		    name: 'person a',
		    age: '11',
		    meal: 'rice',
		    count: '1',
		  },
		    {
		    name: 'person b',
		    age: '22',
		    meal: 'milk',
		    count: '1',
		  },],
		  },
		    {
		    name: 'test3',
		    color: 'orange',
		    logo: 'bar',
		    students: [  {
		    name: 'person a',
		    age: '11',
		    meal: 'rice',
		    count: '1',
		  },
		    {
		    name: 'person b',
		    age: '22',
		    meal: 'milk',
		    count: '1',
		  },],
		  },
		    {
		    name: 'test4',
		    color: 'red',
		    logo: 'bar',
		    students: [  {
		    name: 'person a',
		    age: '11',
		    meal: 'rice',
		    count: '1',
		  },
		    {
		    name: 'person b',
		    age: '22',
		    meal: 'milk',
		    count: '1',
		  },],
		  },    
		  ];

        $scope.add = function() {
      $scope.products.push({
        name: 'test 1',
        color: 'blue',
        logo: 'dilog',      
      });
    };		  
		}
]);