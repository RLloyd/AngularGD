
(function(){
    'use strict';
    var app = angular.module('ng-autofocus', []);
    
    app.directive("autofocus", function() {        
      return {
        restrict: 'A',
        link: function($scope, element) {
          element[0].focus();
        }
          
      };
    });
    console.log("ng-autofocus: This directive is not working.");
}());