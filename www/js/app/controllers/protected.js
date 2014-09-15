app.controller('protectedController', function($scope,$location,$rootScope,settings) {


  $scope.$on("protectedObject", function (event, protectObject) {
    $scope.protectedObject = protectObject;
    console.log("trigger",protectObject);
    $scope.$apply();

  });
  
  //Include your Relayr Keys
  var appId= "3dc990e0-98a2-4c8f-9a98-744621c24731";
  var deviceId= "ee7e9562-2b95-4c93-a1d3-fdbaaea5c160";
  var token ="3RbUR6kjmGdWcJAyF5rrLzO0NGKVymHt";


  //POST to the API with the appId and deviceId in the url to get the credentials for Pubnub

  $(document).ready(function(){
    
    //Use Ajax to get PubNub credentials from Relayr
    $.ajax({
        url: "https://api.relayr.io/apps/"+appId+ "/devices/"+ deviceId,
        type: 'post',
        headers: {
          "Authorization": 'Bearer '+ token 
        },
        dataType: 'application/json',
        complete: function (subscription) {
          console.log(angular.fromJson(subscription.responseText))
          subscription = angular.fromJson(subscription.responseText);
          
          //connect to pubnub using the credentials from relayr
          var pubnub = PUBNUB.init({
            subscribe_key : subscription.subscribeKey,
            ssl: true,

            cipher_key: subscription.cipherKey,
            auth_key: subscription.authKey

          });

          pubnub.subscribe({
            channel : subscription.channel,

            message : function(data){
              //Listen for the raw data
              data = angular.fromJson(data)
              console.log("Data from sensor: ",data);
              if (data.prox < 2000){
                    
                $location.path("/alarm");
                setTimeout(function(){

                  $rootScope.$broadcast('protectedObjectAlarm', $scope.protectedObject);  
                },100)
              }
              $scope.$apply();
            },
            error: function(err){console.log("pubNub error:",err)}
          });  

     
        },
        error: function(response){
        }
    });
  });
});
