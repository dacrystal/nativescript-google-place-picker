NativeScript plugin for Google Place Picker
================

This is a cross-platform (iOS & Android) Nativescript plugin for the Google Places Picker

- [Place Picker | Google Places API for Android](https://developers.google.com/places/android-api/placepicker)
- [Place Picker | Google Places API for iOS](https://developers.google.com/places/ios-api/placepicker)



Prerequisites
===
*iOS* - Cocoapods is [installed](https://guides.cocoapods.org/using/getting-started.html#getting-started)

*Android* - Latest Google Play services SDK [installed](https://developer.android.com/sdk/installing/adding-packages.html)

*Google Places API Key* - Go to the [Google Developers Console](https://console.developers.google.com), create a project, and enable the ` Google Places API for Android` and ` Google Places API for iOS` APIs.  Then under credentials, create an API key.

*Google Maps API Key* - Go to the [Google Developers Console](https://console.developers.google.com), create a project, and enable the `Google Maps Android API` and `Google Maps SDK for iOS` APIs.  Then under credentials, create an API key.



Installation
===

## Install the plugin using the NativeScript CLI tooling

```
tns plugin add nativescript-google-place-picker
```


Setup Google Maps API
===
 
## Setup Android API Key

Add API key to app manifest(`AndroidManifest.xml`). Refer to [Android/add key](https://developers.google.com/places/android-api/start#api-key)

The plugin will default to latest available version of the Android `play-services-places` SDK.  If you need to change the version, you can add a project ext property `googlePlayServicesVersion` like so:

```
//   /app/App_Resources/Android/app.gradle

project.ext {
    googlePlayServicesVersion = "+"
}
```

## Setup iOS API Key

In the main script of your app `app.js`, use the following to add the API key (providing your key in place of `PUT_API_KEY_HERE`)

```
if(application.ios) {
  PlacePicker.iosProvideAPIKey("PUT_API_KEY_HERE");
}
```

If you are using Angular, you need to modify the `app.module.ts` as follows:
```
import * as platform from "platform";
import {PlacePicker} from "nativescript-google-place-picker"
....
if (platform.isIOS) { 
  PlacePicker.iosProvideAPIKey("PUT_API_KEY_HERE");
}
```

### Usage Example
```js
...
public onShowPicker() {
  var picker = new PlacePicker()

  picker.present()
      .then((r)=>{
          console.log(r.latitude)
          console.log(r.longitude)
      })
      .catch((e)=>{
          console.log("Error: "+e);
      })
}
...
```



