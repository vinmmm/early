'use strict';

/**
 * @ngdoc function
 * @name earlyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the earlyApp
 */
angular.module('earlyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
