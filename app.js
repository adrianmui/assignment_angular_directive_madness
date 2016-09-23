var directiveMadness = angular.module('directiveMadness', []);


directiveMadness.directive('mainNav', [function(){
  return {
    templateUrl: 'main-nav.html',
    restrict: 'E',
    scope: {}
  };
}]);
