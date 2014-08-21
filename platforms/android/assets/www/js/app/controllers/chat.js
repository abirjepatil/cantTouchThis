app.controller('chatController', function($scope, $timeout, $rootScope, socket, settings) {
	$scope.settings = settings;

	$scope.changeRoom = function(){
		localStorage.setItem("room",$(".roomName > input").val());
		window.location.reload();
	}
	socket.on("userJoin", function(user){
		//addUser(user);

	});

	socket.on("users", function(data){
		$scope.users = data;
	});	

	socket.on("userHeartbeat", function(data){
		$scope.users.forEach(function(user){
			if (user.username == data.username && data.time){

				user.time = rectime(Math.floor(data.time))
			}
		});
	});	

	socket.on("disconnected", function(data){
		var curTime = new Date().toString("hh:mm tt");
  	data.time = curTime;
  	data.msg = data.username+ " has disconnected";
  	$scope.system.push(data);


		scrollChat();	
	});
  

  $scope.system = [];
  if (localStorage.getItem("history:"+settings.room)){
  	$scope.history = angular.fromJson(localStorage.getItem("history:"+settings.room));
		$timeout(function(){
			scrollChat();		

  	},500)
  }else{
  	$scope.history = [];
  }
  socket.on("talk", function(data){
  	var curTime = new Date().toString("hh:mm tt");
  	var uId = new Date().getTime();
  	data.time = curTime;
  	data.uId = uId;
  	$scope.history.push(data);
  	localStorage.setItem("history:"+settings.room, angular.toJson($scope.history));
		scrollChat();		

	});


	function scrollChat(){
		console.log($(".conversation").scrollTop())
		var nMove = parseInt($('.conversation').scrollTop() + 50);
		$('.conversation').scrollTop(nMove);
		setTimeout(function(){
		$('.conversation').scrollTop(nMove + 100);

		}, 10);
	}

	$(document).on("keypress", ".chatBox",function(e){
 		if(e.which == 13) {
 			socket.emit("talk",{room:settings.room,username: settings.username,msg: $(this).val()});
 			$(this).val("");
    	}
	});

	$(window).resize(function(){
		rsChat();
	});			

	$(document).ready(function(){
		rsChat();
		$("i.icon-3bar").on("click",function(){
			if ($("section").hasClass("right")){
				$("section").removeClass("right");
				$(".chat").addClass("hide");
			}else{
				$("section").addClass("right");
				$(".chat").removeClass("hide");
			}
			var calibrate = setInterval(function(){
				rsVid();

			},10);
			setTimeout(function(){
				rsVid();
				clearInterval(calibrate);
			},1000);
		});
	});


});
