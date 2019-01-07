# React Native app templates

## Required packages
1. Java 8 SDK
2. Node & NPM
3. React Native CLI
4. Android Studio

### Install React Native CLI

`sudo npm install -g react-native-cli`

## Android Studio + React Native installation.

1. Download Android Studio SDK .zip or .gz etc.
	- Important! Add this to aliases (.bashrc):
    ```
  	export ANDROID_HOME=$HOME/Android/Sdk
  	export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-toolsre
    ```
2. Unzip it to /opt folder
3. Run setup or program at /opt/android-studio/bin/studio.sh by running ./studio.sh
	`/opt/android-studio/bin/studio.sh`
4. Physically connect an Android device or create an AVD - Android Virtual Device.
	- Create new project, no template,
	- Click 'Build missing packages' or 'download ...'
	- Tasks -> Android VD is now possible to access,
	- Create AVD - Nexus 5 with Android 6.0 (this version must be running/connected in order to build a react app)

## Create and run React Native App

1. Create a new project with: `react-native init newProject`
2. `cd newProject`
3. Build necessary project files:
	- `react-native run-android` (errors - https://stackoverflow.com/questions/32634352/react-native-android-build-failed-sdk-location-not-found)
	- AVD should be running or a device should be connected.
	- ANDROID_HOME and $PATH should be set in .bashrc or similar file
4. ReactNative service can be started (optional):
	- `react-native start`
	- It might not work, use this instead: `react-native start --reset-cache` (https://github.com/facebook/react-native/issues/21530)
5. Welcome to ReactNative! (on your AVD or physical device).
