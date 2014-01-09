'use strict';

var blog = angular.module('blog', ['ngResource','articleControllers','articlesServices']);

blog.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'views/home.html'});
  $routeProvider.when('/angularjs', {templateUrl: 'views/article-list.html',controller: 'ArticleListCtrl'});
  $routeProvider.when('/about', {templateUrl: 'views/about.html'});
  $routeProvider.when('/404', {templateUrl: 'views/404.html'});
  $routeProvider.otherwise({redirectTo: '/404'});
});
