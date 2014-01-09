'use strict';

var blog = angular.module('blog', ['ngRoute','ngResource','articleControllers','articlesServices']);

blog.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'views/home.html'});
  $routeProvider.when('/angularjs', {templateUrl: 'views/article-list.html',controller: 'ArticleListCtrl'});
  $routeProvider.when('/detail/:articleId', {templateUrl: 'views/article-detail.html',controller: 'DetailArticle'});
  $routeProvider.when('/about', {templateUrl: 'views/about.html'});
  $routeProvider.when('/404', {templateUrl: 'views/404.html'});
  $routeProvider.otherwise({redirectTo: '/404'});
});


