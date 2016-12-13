'use strict';

/**
 * @ngdoc function
 * @name leatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leatherApp
 */
angular.module('leatherApp')
  .controller('BarCtrl', function ($scope, $routeParams, barService) {
    $scope.barKey = $routeParams.barKey;
    $scope.bar = barService.getBar($scope.barKey);
    $scope.barInclude = 'views/bar/' + $scope.barKey + '.html';
  });
