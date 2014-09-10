'use strict';

// Declare app level module which depends on views, and components
var clmApp = angular.module('clmApp', [
	'ngRoute',
  'clmApp.controllers',
  'clmApp.directives',
  'clmApp.filters',
  'clmApp.services',
  'clmApp.globals'
]);

clmApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/edituserprofile', {
    templateUrl: 'views/edituserprofile.html',
    //controller: 'ListController'
  }).
  when('/editcardetails', {
    templateUrl: 'views/editcardetails.html',
  }).
  when('/telephony', {
  }).
  when('/open_items', {
  }).
  when('/chats', {
  }).
  when('/alerts', {
  }).
  when('/summary', {
  }).
  otherwise({
    redirectTo: '/dashboard'
  });
}]);