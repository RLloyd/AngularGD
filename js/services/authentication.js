/*************| AUTHENTICATION FACTORY 3/25/2015 |*************/

(function () {

    var app = angular.module("authFactory", []);

    app.factory("Authentication", function (
                $firebase, 
                 $firebaseSimpleLogin, 
                 FIREBASE_URL, 
                 $location) {

        var fireRef = new Firebase(FIREBASE_URL);
        var simpleLogin = $firebaseSimpleLogin(fireRef);

        /*var logObject = {}; //declared an object
            logObject.someMethod = function(){
                login: function (user) {
                    console.log("user: "+user);
                    return simpleLogin.$login("password", {
                        email: user.email,
                        password: user.password
                    });
                }, //end login

                logout: function(){
                    return simpleLogin.$logout();
                } //end logout
            };*/
        
        /*Stacked locally scoped Object Literal. Traditional single Object Literal notation.*/
        var logObject = {
            login: function (user) {
                console.log("login user: "+user);
                return simpleLogin.$login("password", {
                    email: user.email,
                    password: user.password
                });
            }, //end login
            
            register: function (user) {
                console.log("Create User! Call made from RegistrationController");
                return simpleLogin.$createUser(user.email, user.password)
                console.log("User Created!"); //never get called.
            }, //end register
            
            logout: function(){
                console.log("you're logout!");
                return simpleLogin.$logout();
            } //end logout

        }; //end logObject

        return logObject;

    }); //end factory

}()); //end IIFE: Immediately-Invoked Function Expression