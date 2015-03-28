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
                .then(function (user) {
                        $location.path("/meetings");
                    },
                    function (error) {
                        $scope.message = error.toString();
                    });
            /*$location.path("/meetings");*/
            /*console.log("$location.path: " + $location.path);*/
            /*-----------|This function will be called by ng-submit in login.html*/
            /*alert($scope.user.email);*/
        };
        
        /*register() is getting called from register.html*/
        $scope.rehistro = function () {
            console.log("$scope.rehistro. Call from register.html");
            /*Makes a call to Authentication to create a new user*/
            Authentication.register($scope.user)
                /*if registration is successful then go to this path*/
                .then(function (user) {
                        console.log("Naka rehistron!");
                        /*Authentication.$createUser($scope.user);*/
                        /*Authentication.register($scope.user)*/
                        $location.path("/login");
                    },
                    function (error) {
                        $scope.message = error.toString();
                    });
            /*$location.path("/meetings");*/
            /*console.log("$location.path: " + $location.path);*/
            /*-----------|This function will be called by ng-submit in login.html*/
            /*alert($scope.user);*/
            console.log("Calling Authentication");
        };


        /*-----------|register() function.*/
        /*$scope.register = function () {
            $location.path("/meetings");
        };*/

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