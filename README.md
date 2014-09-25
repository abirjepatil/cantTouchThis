# cantTouchThis


Cant Touch This is a quick and fun application which uses the Wunderbar Light/Color/Proximity sensor and the relayr Cloud Platform to alert when  your wallet/keys/cello/elephant or anything you can think of has been touched, stolen or moved. Simply place your sensor on the item you wish to monitor and show people that they Cant Touch This!

The can'tTouchThis application utilizes the [relayr JavaScript SDK](https://github.com/relayr/browser-sdk). It can however, be converted to a mobile application with the use of the [Cordova](http://cordova.apache.org/) platform. The instructions below indicate how this conversion is achieved.

In the example below we've used Cordova for Android but a similar process is available for iOS as well.

## Converting cantTouchThis to a Mobile App - Android

1. Install [Cordova](http://cordova.apache.org/docs/en/3.5.0/guide_overview_index.md.html#Overview)
2. you will also need the following:

  * A Java SDK
  * A correctly installed version of [ANT](http://ant.apache.org/manual/install.html)
  * The Android SDK (we recommend installing [this android SDK](https://developer.android.com/sdk/installing/index.html?pkg=studio) 
  * A command line tool such as Terminal
<br/>

2. In your command line tool, navigate to the *CantTouchThis* directory and run: 

		cordova platform add android

 	If this fails, try to `cordova platform remove android`, and then `cordova platform add android`

3. Next run: 

		cordova build android

  	This will check if you have the android SDK installed and ready.

4. Lastly run: 

		cordova run android

  At this point, the SDK emulator will be launched and you can try and use the application on your mobile phone.
