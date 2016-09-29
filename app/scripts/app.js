'use strict';

/**
 * @ngdoc overview
 * @name leatherApp
 * @description
 * # leatherApp
 *
 * Main module of the application.
 */
angular
  .module('leatherApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
    $routeProvider.when('/bar/:barKey', {
      templateUrl: 'views/bar.html',
      controller: 'BarCtrl'
    })
    $routeProvider.otherwise({
        redirectTo: '/'
      });
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyAWY0lgrvw957CTrzmz0MEAKNGDyqwBDx8',
        libraries: 'weather,geometry,visualization'
    });
  })
  .run(['$rootScope', '$location', '$q', function($rootScope, $location, $q) {
    var path = function() { return $location.path();};
    $rootScope.$watch(path, function(newVal){
      $rootScope.activetab = newVal;
    });
    var q = $q.defer();
    $rootScope.userlocation = q.promise;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(pos) {
        var pos = { 'lat' : pos.coords.latitude, 'lng' : pos.coords.longitude };
        q.resolve(pos);
        $rootScope.userlocation = pos;
      });
    }
  }]);
