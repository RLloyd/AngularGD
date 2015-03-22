var app = angular.module("gdApp", ["ngRoute", "AppControllers"]);

var appCtrl = angular.module("AppControllers", []);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
    .when("/login", {
        templateUrl: "views/login.html"
    })
    .when("/register", {
        templateUrl: "views/register.html"
    })
    .when("/meetings", {
        templateUrl: "views/meetings.html"
    });
    
}]);

