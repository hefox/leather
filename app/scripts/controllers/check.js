'use strict';

/**
 * @ngdoc function
 * @name leatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leatherApp
 */
angular.module('leatherApp')
  .controller('CheckCtrl', function ($scope, $location) {
    $scope.setCheckedStatus = function () {
      localStorage.setItem('verified', true);
      $location.path('/');
    };
  });
