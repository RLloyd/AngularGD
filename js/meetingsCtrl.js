/*************| MEETINGS CONTROLLER |*************/

(function () {

    var app = angular.module("meetContlr", []);
    
    app.controller("MeetingsController", ["$scope", "$firebase", 
        function ($scope, $firebase) {
        
        var fireRef = new Firebase("https://angulargdapp.firebaseio.com/meetings");
        /*alert(fireRef)*/
        var meetingsVar = $firebase(fireRef);
        $scope.meetingsData = meetingsVar.$asObject();
        
        /*-----=======| Download the data into a local object*/
        /*$scope.meetingsData = $firebase(fireRef);*/
        
        var onComplete = function(error) {
            /*Try thi slater. Remove comment when working to avoid confusion*/
          if (error) {
            console.log('Synchronization failed');
          } else {
            console.log('Synchronization succeeded');
          }
        };
        
        $scope.addMeetupMethod = function(){
            meetingsVar.$push({
                name: $scope.meetupName, //"Florida Meetup 2", //
                date: Firebase.ServerValue.TIMESTAMP
            })
            .then(function(){
              $scope.meetupName = "";  
            });
            //var logChild = fireRef.child("JIC")
            //console.log("logChild: "+logChild);
            console.log(fireRef.toString());            
            //console.log($scope.meetupName + " ::: key: " + key);
            console.log(Firebase.ServerValue.TIMESTAMP);
            /*Empty the text field after submission*/
           
             /*$scope.meetupName = "";*/
            
            /*var onError = function (reason) {
                $scope.error = reason + "It ain't working!";
            };*/
            /*.then(function(){
              $scope.meetupName = "";  
            });*/
            /*function(error){
                console.log("Error: "+ error.toString());
            }; */
        };
        /*var onError = function (reason) {
            console.log("reason: " + reason);
            $scope.error = reason.toString();
            $scope.meetupName = error;
        };*/
            
        /*$scope.addMeeting = function(){
            meetingsData.$push({
                name: "Florida Meetup", //$scope.meetingName,
                date: Firebase.ServerValue.TIMESTAMP
            })
            .then(function(){
              $scope.meetingName = "";  
            }),
            function(error){
                console.log("Error: "+ error)
            };            
        };*///addMeeting
       /* $scope.deleteMeeting=function(key) {
            meetingsInfo.$remove(key);
          }*/ //deletemeeting
        /*var tmp = $firebase(fireRef);;*/
        $scope.deleteMeetupMethod = function(key){
            console.log("keyang:" +key);
            meetingsVar.$remove(key);
            /*$scope.meetingsData.$remove(key)*/
            //tmp.set(key)
            /*fireRef.$remove(key);*/
        }
        //var obj = $firebase(fireRef);
        /*var deleteRecord = function(){
            $scope.deleteMeetupMethod.$remove(key).then(function(fireRef) {
              // data has been deleted locally and in Firebase
            }, function(error) {
              console.log("Error:", error);
            });
        };*/
        

    }]);

}());