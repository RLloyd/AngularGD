/*************| DIRECTIVES |*************/

(function(){
    
    'use strict';
    /*ng-autofocus: This directive is not working.*/
    var app = angular.module('ng-autofocus', []);
        app.directive("autofocus", function() {        
          return {
            restrict: 'A',
            link: function($scope, element) {
              element[0].focus();
            }

          };
        });

        console.log("Load testing of a directive");
    
    
}());