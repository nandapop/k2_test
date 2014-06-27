'use strict';

/**
 * @ngdoc function
 * @name testYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testYeomanApp
 */
angular.module('testYeomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
