app.controller('alarmController', function($scope,$location,$rootScope,settings) {
  
  var audio;
  $(document).ready(function(){
    audio = document.getElementById('a');
  });
  $scope.time = new Date().toString().split(" GMT")[0];
  $scope.$on("protectedObjectAlarm", function (event, protectObject) {
    $scope.protectedObject = protectObject;
    console.log("alarm",protectObject);
    $scope.$apply();
    audio.play();
  });

  $scope.dismiss= function(){
    audio.pause();
    $location.path("/protected");
    setTimeout(function(){

      $rootScope.$broadcast('protectedObject', $scope.protectedObject);  
    },100)

  }
});
