cantTouchThis
=============

Cant Touch This is a quick and fun application which uses the Wunderbar Light/Color/Proximity sensor and the relayr Cloud Platform to alert when  your wallet/keys/cello/elephant or anything you can think of has been touched, stolen or moved. Simply place your sensor on the item you wich to monitor and show people that they Cant Touch This! 

#Getting Started:
1. Install Cordova (http://cordova.apache.org/docs/en/3.5.0/guide_overview_index.md.html#Overview)you will also need
  * A Java SDK
  * A correctly installed verion of ANT(http://ant.apache.org/manual/install.html)
  * The Android SDK (we recommend installing android SDK (https://developer.android.com/sdk/installing/index.html?pkg=studio)
  * A command line tool such as Terminal

2. In the terminal navigate to the CantTouchThis directory and run: **cordova platform add android**
  * If this fails, try to **cordova platform remove android**, then again **cordova platform add android**

3. Then run: **cordova build android**
  * This will check if you have the android SDK installed and ready.

4. Simply run: **cordova run android**
  * At this point, the emulator from the SDK should be fired up, if you have a device plugged in you can even try it on that
