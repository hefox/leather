'use strict';

/**
 * @ngdoc function
 * @name leatherApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the leatherApp
 */
angular.module('leatherApp')
  .directive('leatherMap', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function ($scope, $location, $rootScope, uiGmapIsReady) {
        $scope.map = {
          control : {},
          userLocationOptions: {icon: 'images/smiley_happy.png'},
          center: { latitude: 37.778538, longitude: -122.405731 },
          zoom: 13,
          markersEvents: {
            click: function(marker, eventName, model, args) {
              $location.path(model.url);
            }
          },
        };
        var bars = new LeatherBars();
        $scope.bars = bars.getBars();
        $scope.map.bars = [];
        var i =0;
        var icons = {
          'other' : 'images/lingerie.png',
          'bathhouse': 'images/zipper.png'
        };
        var path = function() { return $location.path();};
        var prevKey, prevIcon = null;
        $scope.$watch(path, function(newVal){
          var barkey = newVal.replace('\/bar\/', '');
          if (barkey in $scope.bars) {
            if (prevKey) $scope.bars[prevKey].icon = prevIcon;
            prevKey = barkey;
            prevIcon = $scope.bars[barkey].icon;
            $scope.bars[barkey].icon = 'images/star-3.png';
          }
        });
        for (var key in $scope.bars) {
          if ($scope.bars[key].latitude) {
            $scope.bars[key].id = i++;
            $scope.bars[key].url = '/bar/' + key;
            $scope.bars[key].icon = $scope.bars[key].type ? icons[$scope.bars[key].type] : 'images/liquor.png';
            $scope.map.bars.push($scope.bars[key]);
          }
        }
        $scope.map.bars.sort(function(a, b) { return b.latitude - a.latitude});
        var path = function() { return $location.path();};
        $scope.$watch(path, function(newVal){
          $scope.activetab = newVal;
        });
        uiGmapIsReady.promise()
        .then(function (map_instances) {
          $scope.gmap = $scope.map.control.getGMap();
          $rootScope.userlocation.then(function() {
            var latLng = new google.maps.LatLng($rootScope.userlocation);
            if ($scope.gmap.getBounds().contains(latLng)) {
              $scope.gmap.setCenter(latLng);
              $scope.gmap.setZoom(17);
              $scope.map.userlocation = {latitude: $rootScope.userlocation.lat, longitude: $rootScope.userlocation.lng};
            }
          });
        });
      },
      templateUrl: 'views/map.html',
      replace: true
    };
  });
