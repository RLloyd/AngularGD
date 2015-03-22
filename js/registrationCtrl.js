/*REGISTRATION CONTROLLER*/

(function () {

    var app = angular.module("RegistrationController", []);
    app.controller("RegistrationController", function ($scope) {
        
        /*$scope snoops around. Feed the xprsion {{name}} and can get info back with $scope.$on(...) */
        $scope.name = "Odee"
        $scope.$on("$viewContentLoaded", function(){
            console.log("myForm loaded!: "+$scope.myForm);    
        });
        console.log("myForm not loaded yet!: "+$scope.myForm);
        console.log("RegistrationController Loaded!");
    });
    
}());