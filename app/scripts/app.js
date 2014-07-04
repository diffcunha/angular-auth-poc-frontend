'use strict';

/**
 * @ngdoc overview
 * @name authPocFrontendApp
 * @description
 * # authPocFrontendApp
 *
 * Main module of the application.
 */
var app = angular
  .module('authPocFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/books");
  //
  // Now set up the states
  $stateProvider
    .state('books', {
      url: "/books",
      templateUrl: 'views/books.html',
      resolve: {
        books: function($http) {
          return $http({ method: 'GET', url: 'http://localhost:8080/auth-poc/api/books' });
        },
      },
      controller: function($scope, books) {
        $scope.books = books;
      }
    })
    .state('books.detail', {
      url: "/books/:id",
      templateUrl: 'views/book.html',
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    });
});
