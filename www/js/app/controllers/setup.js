app.controller('setupController', function($scope,$location,$rootScope,settings) {
  $scope.submitObject= function(protectedObject){
    console.log("obj",protectedObject)
    $location.path("/protected");
    setTimeout(function(){

      $rootScope.$broadcast('protectedObject', protectedObject);  
    },100)

  }
});
