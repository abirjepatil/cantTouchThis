app.controller('mainController', function($scope, $location,$rootScope,settings) {
 	
	$scope.ready = false;
	$(document).ready(function(){
		setTimeout(function(){
			$scope.ready = true;
			$scope.$apply();
		},100)
	});

	$scope.setup = function(){
		$location.path("/setup");
	}
	setTimeout(function(){
		$location.path("/setup");
		$scope.$apply();
	},2000);
});
