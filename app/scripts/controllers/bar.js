'use strict';

/**
 * @ngdoc function
 * @name leatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leatherApp
 */
angular.module('leatherApp')
  .controller('BarCtrl', function ($scope, $routeParams) {
    $scope.barKey = $routeParams.barKey;
    var bars = new LeatherBars();
    $scope.bar = bars.getBar($scope.barKey);
    $scope.barInclude = 'views/bar/' + $scope.barKey + '.html';
  });
