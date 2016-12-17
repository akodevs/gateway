'use strict'

require('angular');
require('angular-ui-router');  
require('oclazyload'); 
require('./main/main.js'); 
angular.module('appTemp', ['ngResource', 'ui.router', "oc.lazyLoad"]); 

angular.module('appTemp')
    .config(function($stateProvider, 
        $urlRouterProvider, 
        $compileProvider, 
        $locationProvider, 
        $httpProvider, 
        $urlMatcherFactoryProvider, 
        $provide, 
        $ocLazyLoadProvider) {

            $urlRouterProvider.otherwise("/");
            $urlMatcherFactoryProvider.strictMode(false);
            $locationProvider.hashPrefix('!');
            $locationProvider.html5Mode(true);
            // global configs go here
            $ocLazyLoadProvider.config({});
 });