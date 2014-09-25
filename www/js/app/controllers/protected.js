app.controller('protectedController', function($scope,$location,$rootScope,settings) {


  $scope.$on("protectedObject", function (event, protectObject) {
    $scope.protectedObject = protectObject;
    console.log("trigger",protectObject);
    $scope.$apply();

  });

  $(document).ready(function(){
    var relayr = RELAYR.init({
      appId: "5b7cfd65-df07-4884-bcf6-9b31cf1aca22"
    });

    relayr.devices().getDeviceData({
      deviceId: "ee7e9562-2b95-4c93-a1d3-fdbaaea5c160", 
      token: "UCFSuY4-Ej9PVvbAS5aMsUKhHjuLD1pj",
      incomingData: function(data){
        console.log("Data from sensor: ",data);
        if (data.prox < 2000){
              
          $location.path("/alarm");
          setTimeout(function(){

            $rootScope.$broadcast('protectedObjectAlarm', $scope.protectedObject);  
          },100)
        }
        $scope.$apply();
             
      }
    });  


  });
});