/*************| MAIN APP REGISTRATION WITH DEPENDENCIES |*************/

(function () {

    var app = angular.module("gdApp", ["ngRoute", "regContlr", "AppControllers"]);

    var appCtrl = angular.module("AppControllers", []);

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
            templateUrl: "views/meetings.html"
        })
        .otherwise({
            redirectTo: "/login"
        });
    }]);

}());