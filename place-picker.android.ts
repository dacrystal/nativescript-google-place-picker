import * as application from "application";
import {SelectedPlace, PlacePicker as PlacePickerDef } from "."

declare const android, com, java, org: any;
const  GSMPlacePicker = com.google.android.gms.location.places.ui.PlacePicker;

var Intent = android.content.Intent;
var Activity = android.app.Activity;

function toSelectedPlace(nativePlace): SelectedPlace{
    // android runtime bug
    // Place class should have getName and getAddress methods
    var regex = /.*name=(.*?),\saddress=(.*?),/g
    var m = regex.exec(nativePlace.toString());
    // PlaceEntity{
        // name=IKEA, address=Via Fattoria Rampa, 35, 00173 Roma RM, Italy, phoneNumber=+39 199 114 646, latlng=lat/lng: (41.8361964,12.5934756), viewport=LatLngBounds{southwest=lat/lng: (41.8346829197085,12.59193935), northeast=lat/lng: (41.8373808802915,12.59479955)}, websiteUri=http://www.ikea.com/it/it/store/roma_anagnina, isPermanentlyClosed=false, priceLevel=-1}

    return {
        nativePlace: nativePlace,
        id: nativePlace.getId(),
        name: m[1], // nativePlace.getName()  
        address: m[2], // nativePlace.getAddress()
        latitude: nativePlace.getLatLng().latitude,
        longitude: nativePlace.getLatLng().longitude
    }
}

export class PlacePicker implements PlacePickerDef {

    private _builder;
    constructor(private initCoords = { latitude: 37.788204, longitude: -122.411937}){
        const LatLng = com.google.android.gms.maps.model.LatLng
        const LatLngBounds = com.google.android.gms.maps.model.LatLngBounds

        this._builder = new GSMPlacePicker.IntentBuilder();
        var center = new LatLng(initCoords.latitude , initCoords.longitude);
        var northEast = new LatLng(center.latitude + 0.001, center.longitude + 0.001);
        var southWest = new LatLng(center.latitude - 0.001, center.longitude - 0.001);
        var viewport = new LatLngBounds(southWest, northEast);
        this._builder.setLatLngBounds(viewport)
    }

    public static iosProvideAPIKey(key:string){
    }

    public present(): Promise<SelectedPlace>{
        return new Promise((resolve, reject) => {

            const PLACE_PICKER_REQUEST = 34258;

            var context = application.android.foregroundActivity;
        
            application.android.on(application.AndroidApplication.activityResultEvent, onResult, this);
            function onResult(args) {
                var requestCode = args.requestCode;
                var resultCode = args.resultCode;
                var data = args.intent;
           
                if (requestCode == PLACE_PICKER_REQUEST) {
                    application.android.off(application.AndroidApplication.activityResultEvent, onResult, this);
                    if (resultCode == Activity.RESULT_OK){
                        var place = GSMPlacePicker.getPlace(data, context)
                        resolve(toSelectedPlace(place));
                    }else if (resultCode == Activity.RESULT_CANCELED){
                        resolve(null);
                    }else{
                        reject(new Error("Place picker activity result code " + resultCode));
                    }
                }
            }

            try {
                var intent = this._builder.build(context)
                application.android.foregroundActivity.startActivityForResult(intent, PLACE_PICKER_REQUEST);
                
            } 
            catch (e) {
                var en = e.nativeException
                // if(en && en instanceof com.google.android.gms.common.GooglePlayServicesRepairableException){
                if(en){
                    var apiAvailability = com.google.android.gms.common.GoogleApiAvailability.getInstance();
                    var errorcode = apiAvailability.isGooglePlayServicesAvailable(context)
                    apiAvailability.getErrorDialog(context, errorcode, 0).show();
                }
                application.android.off(application.AndroidApplication.activityResultEvent, onResult, this);
            }
        });
    }
}