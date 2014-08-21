app.controller('protectedController', function($scope,$location,$rootScope,settings) {


  $scope.$on("protectedObject", function (event, protectObject) {
    $scope.protectedObject = protectObject;
    console.log("trigger",protectObject);
    $scope.$apply();

  });
  
  var appId= "456def81-1c82-491f-8738-2d14d12c8e18";
  var deviceId= "8b0621a7-0a5f-407d-9172-3fa8f7bd6b89";
  var token ="uwsyX8zEcPLXHeInhuppyvcn_VUrtTwK";


//POST to the API with the appId and deviceId in the url to get the credentials for Pubnub

  $(document).ready(function(){

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
          var pubnub = PUBNUB.init({
            subscribe_key : subscription.subscribeKey,
            ssl: true,

            cipher_key: subscription.cipherKey,
            auth_key: subscription.authKey

          });

          pubnub.subscribe({
            channel : subscription.channel,

            message : function(data){
              data = angular.fromJson(data)
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
