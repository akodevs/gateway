'use strict';
 
angular.module('appTemp')
	.config(function ($stateProvider) {
	  $stateProvider
	    .state('main', { 
			url: '/',
			data: { pageTitle: 'Home', class: 'home' },
			templateUrl: './main/main',
			controller: 'MainController'
	    }) 
	});  