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

app.directive('copyright', [function(){
  return {
    templateUrl: 'copyright.html',
    restrict: 'E',
    transclude: true,
    scope: {},
    link: function(scope) {
      scope.year = new Date().getFullYear();
    }
  };
}]);

app.directive('colorize', [function(){

  var linkCallback = function (scope, element, attributes){
    scope.color = 'red';
    scope.background = 'green';
    element.css('color', scope.color);
    element.css('background-color', scope.background);
  };

  return {
    restrict: 'A',
    scope: {
      color: '@',
      background: '@'
    },
    link: linkCallback
    // link: function(scope, element, attributes) {
    //   linkCallback(scope, element, attributes);
    // }
  };
}]);

app.directive('mouse', [function(){
  var linkCallback = function(scope, element, attributes) {
    element.on('mousedown', function(){
      element.text("HARAMBE DOWN BY SOCIETY");
    });

    element.on('mouseup', function(){
      element.text("HARAMBE UP FROM THE GRAVE");
    });
  };

  return {
    restrict: 'A',
    link: linkCallback
  };
}]);

app.directive('click', [function(){
  var linkCallback = function(scope, element, attributes) {
    element.on('dblclick', function(){
      element.text("I'm double clickable");
    });
  };

  return {
    restrict: 'A',
    link: linkCallback
  };
}]);

app.directive('hover', [function(){

  var linkCallback = function(scope, element, attributes) {
    element.on('mouseenter', function(){
      console.log('sdfsdf');
      element.text('QUIT HOVERIN');
    });
    element.on('mouseleave', function(){
      element.text('DONT HOVER ME');
    });
  };

  return {
    restrict: 'A',
    link: linkCallback
  };
}]);
