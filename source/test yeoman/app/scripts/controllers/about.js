'use strict';

/**
 * @ngdoc function
 * @name testYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testYeomanApp
 */
angular.module('testYeomanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
