var app = angular.module('directiveMadness', []);

app.controller('formHandler', ["$scope", function($scope) {
  
   $scope.check = function () {
    console.log($scope.rval); 
   };
}]);

app.directive('mainNav', [function(){
  return {
    templateUrl: 'main-nav.html',
    restrict: 'E',
    scope: {}
  };
}]);

app.directive('mainHeader', [function(){
  return {
    templateUrl: 'main-header.html',
    restrict: 'E',
    transclude: true,
    scope: {}
  };
}]);

