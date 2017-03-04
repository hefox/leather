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
    'components',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    });
    $routeProvider.when('/bar/:barKey', {
      templateUrl: 'views/bar.html',
      controller: 'BarCtrl'
    });
    $routeProvider.when('/check', {
      templateUrl: 'views/check.html',
      controller: 'CheckCtrl'
    });
    $routeProvider.otherwise({
      redirectTo: '/'
    });
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyAWY0lgrvw957CTrzmz0MEAKNGDyqwBDx8',
        libraries: 'weather,geometry,visualization'
    });
  })
  .run(['$rootScope', '$location', '$q', 'barService', function($rootScope, $location, $q) {

    $rootScope.$on('$locationChangeStart', function(event, next) {
      var checked = localStorage.getItem('verified');
      if (next !== 'check' && !checked) {
        $location.path('/check');
      }
      else if (next === 'check' && checked) {
        $location.path('/');
      }
    });

    var path = function() { return $location.path();};
    $rootScope.displayMap = 'none';
    $rootScope.$watch(path, function(newVal){
      $rootScope.activetab = newVal;
      $rootScope.displayMap =  newVal === '/' ? 'large' : (newVal !== '/check' ? 'side' : 'none');
      console.log($rootScope.displayMap, newVal);
    });
    var q = $q.defer();
    $rootScope.userlocation = q.promise;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(pos) {
        pos = { 'lat' : pos.coords.latitude, 'lng' : pos.coords.longitude };
        q.resolve(pos);
        $rootScope.userlocation = pos;
      });
    }
  }])
  .factory('barService', function() {
    return new LeatherBars();
  })
  .factory('citationService', function() {
    return new Citations();
  });
