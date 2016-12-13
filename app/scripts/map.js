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
      scope: {
        displayList: '=',
        mapZoom: '=',
      },
      controller: function ($scope, $location, $rootScope, uiGmapIsReady, barService, $window) {
        $scope.map = {
          control : {},
          userLocationOptions: {icon: 'images/smiley_happy.png'},
          center: {
           latitude: 37.77577,
           longitude: -122.40875,},
          zoom: $scope.mapZoom || 14,
          markersEvents: {
            click: function(marker, eventName, model) {
              $location.path(model.url);
            }
          },
        };
        $scope.bars = barService.getBars();
        $scope.map.route = [
          {latitude: 37.78095, longitude: -122.39982},
          {latitude: 37.78078, longitude: -122.3996},
          $scope.bars['handball'],
          {latitude: 37.77729, longitude: -122.40408},
          {latitude: 37.77851, longitude: -122.40564},
          {latitude: 37.77896, longitude: -122.40507},//slot
          {latitude: 37.77851, longitude: -122.40564},
          {latitude: 37.77933, longitude: -122.40664}, // mr b
          {latitude: 37.77851, longitude: -122.40564},
          {latitude: 37.77589, longitude: -122.40893},
          {latitude: 37.77501, longitude: -122.41008},
          $scope.bars['blackblue'],
          {latitude: 37.77501, longitude: -122.41008},
          $scope.bars['driftwood'],
          {latitude: 37.77501, longitude: -122.41008},
          $scope.bars['ringold'],
          {latitude: 37.77378, longitude: -122.40855},
          $scope.bars['arena'],
          $scope.bars['ambush'],
          {latitude: 37.77163, longitude: -122.41137},
          {latitude: 37.77282, longitude: -122.41282},
          {latitude: 37.77196, longitude: -122.4141},
          $scope.bars['oasis'],
          {latitude: 37.77196, longitude: -122.4141},
          {latitude: 37.77094, longitude: -122.41496},
          $scope.bars['eagle'],
        ];
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
            if (prevKey) {
              $scope.bars[prevKey].icon = prevIcon;
              $scope.setDontmove(false);
            }
            prevKey = barkey;
            prevIcon = $scope.bars[barkey].icon;
            $scope.bars[barkey].icon = 'images/star-3.png';
            $scope.barkey = barkey;
            $window.document.title = $scope.bars[barkey].title;
          }
          else {
            $window.document.title = 'Leather History Tour';
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
        $scope.map.bars.sort(function(a, b) { return b.latitude - a.latitude;});
        path = function() { return $location.path();};
        $scope.$watch(path, function(newVal){
          $scope.activetab = newVal;
        });
        $scope.setDontmove = function(val) {
          if (val !== undefined) {
            $scope.dontmove = val;
          }
          return val;
        };
        uiGmapIsReady.promise()
        .then(function () {
          $scope.gmap = $scope.map.control.getGMap();
          if ($rootScope.userlocation && $rootScope.userlocation.then) {
            $rootScope.userlocation.then(function() {
              var latLng = new google.maps.LatLng($rootScope.userlocation);
              if ($scope.gmap.getBounds().contains(latLng)) {
                $scope.gmap.setCenter(latLng);
                $scope.gmap.setZoom(17);
                $scope.map.userlocation = {latitude: $rootScope.userlocation.lat, longitude: $rootScope.userlocation.lng};
              }
              else {
                $scope.setDontmove(false);
              }
            });
          }
          else {
            $scope.setDontmove(false);
          }
          $scope.$watch('dontmove+barkey', function() {
            if (!$scope.dontmove && $scope.barkey) {
              $scope.map.control.refresh($scope.bars[$scope.barkey]);
            }
          });
        });
      },
      templateUrl: 'views/map.html',
      replace: true
    };
  });
