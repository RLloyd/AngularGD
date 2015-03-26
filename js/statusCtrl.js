/*************| USER LOGIN STATUS CONTROLLER 3/25/2015 |*************/

(function () {

    var app = angular.module("statusContlr", []);
    
    app.controller("StatusController", ["$scope", "$rootScope", "$firebaseSimpleLogin", "$location", "Authentication", function ($scope, $rootScope, $firebaseSimpleLogin, $location, Authentication) {
        
        /*Logout function*/
        $scope.logout = function(){
            Authentication.logout(); //Calls the logout() from Authentication
            $location.path("/login");
        };
         $rootScope.$on("$firebaseSimpleLogin:logout", function(ev, authUser){
            $scope.userEmail = null; //resets the user email to null            
        }); //end $rootScope logout
        
        /*Login function*/
        $rootScope.$on("$firebaseSimpleLogin:login", function(ev, authUser){
            $scope.userEmail = authUser.email;
            
        }); //end $rootScope login
        

    }]); //end StatusController

}()); //end IIFE: Immediately-Invoked Function Expression