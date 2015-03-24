/*************| MAIN APP REGISTRATION WITH DEPENDENCIES |*************/

(function () {

    var app = angular.module("gdApp", 
        ["ngRoute", "firebase", "regContlr", "meetContlr", "AppControllers"]);

    var appCtrl = angular.module("AppControllers", ["firebase"]);

    app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider
        .when("/login", {
            templateUrl: "views/login.html",
            controller: "RegistrationController"
        })
        .when("/register", {
            templateUrl: "views/register.html",
            controller: "RegistrationController"
        })
        .when("/meetings", {
            templateUrl: "views/meetings.html",
            controller: "MeetingsController"
        })
        .otherwise({
            redirectTo: "/login"
        });
    }]);

}());