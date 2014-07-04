'use strict';

/**
 * @ngdoc function
 * @name authPocFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the authPocFrontendApp
 */
angular.module('authPocFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
