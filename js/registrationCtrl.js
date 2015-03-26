/*************| LOGIN/REGISTRATION CONTROLLER 3/25/2015 |*************/

(function () {

    var app = angular.module("regContlr", []);
    
    app.controller("RegistrationController", function (
                   $scope, 
                    $firebaseSimpleLogin, 
                    $location, 
                    Authentication) {

        /*var fireRefSL = new Firebase("https://angulargdapp.firebaseio.com/");
        var simpleLogin = $firebaseSimpleLogin(fireRefSL);*/
        
        /*-----------|login() function. This will route to the location.path of /meetings in app.js where it's been registered*/
        $scope.login = function () {
            Authentication.login($scope.user)
            .then(function(user){
                $location.path("/meetings");
            }, 
            function(error){
                $scope.message = error.toString();
            });
            /*$location.path("/meetings");*/
            /*console.log("$location.path: " + $location.path);*/
            /*-----------|This function will be called by ng-submit in login.html*/
            /*alert($scope.user.email);*/
        };
        
        /*-----------|register() function.*/
        $scope.register = function () {
            $location.path("/meetings");
        };

        /*-----------|$scope snoops around. Feed the xprsion {{name}} and can get info back with $scope.$on(...) */
        /*$scope.name = "Odee";
        $scope.$on("$viewContentLoaded", function () {
            console.log("myForm loaded!: " + $scope.myForm);
        });
        console.log("myForm not loaded yet!: " + $scope.myForm);
        console.log("RegistrationController Loaded!" + app);
*/
        /*-----------|This function will be called by ng-submit in login.html*/
        /*$scope.login = function(){
            alert($scope.user.email);
        }*/



    });

}()); //end IIFE: Immediately-Invoked Function Expression