/**
 * @ngdoc overview
 * @name Overview
 *
 * @description For a conceptional version check the README.md file in this project. This script (app.js) is the main file that starts off the whole Single Page Application.
    The Html file (RelayrDashboard.html) is the main single page that will nests all dynamic views. The html file also imports all of the scripts needed in order.

*/

var app = angular.module('thatsMyStuff', [
  'ngRoute',
  'ngResource'
]);



/**
 * @ngdoc provider
 * @name Route Configurations / Main setup
 *
 * @description This section provides the basic routing for the application.
 *
 * The routing is done in HTML5 and rewrite rules from Nginx. in the App.run section we determine the token logic. in the app.config we determine the routes for the application when logged in.

 */
app.constant("settings", {
    username:"",
    room:"",
});

app.config(function ($routeProvider, $locationProvider,settings) {

    $routeProvider.
      when("/", { templateUrl: "main.html" }).
      when("/setup", { templateUrl: "setup.html" }).
      when("/protected", { templateUrl: "protected.html" }).
      when("/alarm", { templateUrl: "alarm.html" }).
      otherwise( { redirectTo: "/" });


});




