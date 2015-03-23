/*************| LOGIN/REGISTRATION CONTROLLER |*************/

(function () {

    var app = angular.module("regContlr", []);
    app.controller("RegistrationController", function ($scope, $location) {

        /*-----------|login() function. This will route to the location.path of /meetings in app.js where it's been registered*/
        $scope.login = function () {
            $location.path("/meetings");
            /*console.log("$location.path: " + $location.path);*/
            /*-----------|This function will be called by ng-submit in login.html*/
            alert($scope.user.email);
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

}());