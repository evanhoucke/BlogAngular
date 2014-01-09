'use strict';

var blog = angular.module('blog', ['ngResource']);

blog.config(function($routeProvider) {
  $routeProvider.
      when('/', {
          templateUrl: 'views/home.html'
      }).
      when('/about', {
          templateUrl: 'views/about.html'
      });
});
