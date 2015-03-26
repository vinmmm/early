'use strict';

/**
 * @ngdoc function
 * @name earlyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the earlyApp
 */
angular.module('earlyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
