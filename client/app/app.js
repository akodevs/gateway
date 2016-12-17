'use strict';

var vendorPath = './bower-components/';

require(vendorPath + 'angular');
require(vendorPath + 'angular-ui-router');  
require(vendorPath + 'oclazyload'); 
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