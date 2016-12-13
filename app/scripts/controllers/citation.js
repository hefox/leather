'use strict';

/**
 * @ngdoc function
 * @name components
 * @description
 * # limg
 * A citation for an article
 */
angular.module('components', [])
  .directive('cl', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
	   	 citekey: '@'
      },
      controller: function($scope, $anchorScroll, $location) {
        $scope.scrollToCite = function() {
          $location.hash('citation-' + $scope.citekey);
          $anchorScroll();
        };
      },
      template: ' <a id="cite-for-{{citekey}}" ng-click="scrollToCite()"><span class="glyphicon glyphicon-chevron-down"></span></a>',
      replace: true
    };
  })
  .directive('citation', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
	   	 citekey: '@'
      },
      controller: function(citationService, $scope, $anchorScroll, $location) {
        $scope.citation = citationService.getCitation($scope.citekey);
        $scope.scrollToCite = function() {
          $location.hash('cite-for-' + $scope.citekey);
          $anchorScroll();
        };
        $scope.$watch(function () {
            return $location.hash();
          }, function (value) {
            if (value === 'citation-' + $scope.citekey) {
              $scope.isActive = true;
            }
            else {
              $scope.isActive = false;
            }
        });
      },
      template: '<p ng-class="{\'bg-info\': isActive}" id="citation-{{citekey}}"><a ng-click="scrollToCite()"><span class="glyphicon glyphicon-chevron-up"></span></a> {{citation.author}} <cite>"{{citation.title}}"</cite> {{citation.source}} <span ng-if="citation.link "><a href="{{citation.link}}">{{citation.link}}</a></span></p>',
      replace: true
    };
  })
  .directive('citations', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
	   	 citekeys: '@'
      },
      controller: function($scope) {
        $scope.citations = $scope.citekeys.split(',');
      },
      template: '<div><h3>References</h3><ul><li ng-repeat="cite in citations"><citation citekey="{{cite}}"></li></ol></div>',
      replace: true
    };
  });

