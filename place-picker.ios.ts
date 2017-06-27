import {Page} from "ui/page";
import {topmost} from "ui/frame";
import {SelectedPlace,PlacePicker as PlacePickerDef } from "."



function toSelectedPlace(nativePlace): SelectedPlace{
    if (nativePlace == null){
        return null;
    }

    return {
        nativePlace: nativePlace,
        id: nativePlace.placeID,//
        name: nativePlace.name,
        address: nativePlace.formattedAddress, 
        latitude: nativePlace.coordinate.latitude,
        longitude: nativePlace.coordinate.longitude,
    }
}


export class PlacePickerDelegate extends NSObject implements GMSPlacePickerViewControllerDelegate{
    public static ObjCProtocols = [ GMSPlacePickerViewControllerDelegate ];
    private _placePicker: PlacePicker;

    placePickerDidCancel(viewController: GMSPlacePickerViewController){
        viewController.dismissViewControllerAnimatedCompletion(true, null);
        this._placePicker.done(null);
    }

	placePickerDidFailWithError(viewController: GMSPlacePickerViewController, error: NSError) {
        viewController.dismissViewControllerAnimatedCompletion(true, null);
        this._placePicker.error(error);
    }   

	placePickerDidPickPlace(viewController: GMSPlacePickerViewController, place: GMSPlace) {
        viewController.dismissViewControllerAnimatedCompletion(true, null);
        this._placePicker.done(toSelectedPlace(place));
    }

    public initWith(p:PlacePicker): PlacePickerDelegate{
        this._placePicker = p;
        return this;
    }
}


export class PlacePicker implements PlacePickerDef{
    private _resolve;
    private _reject;
    private _gsmpp: GMSPlacePickerViewController;

    constructor(private initCoords = { latitude: 37.788204, longitude: -122.411937}){
        var center = CLLocationCoordinate2DMake(initCoords.latitude , initCoords.longitude);
        var northEast = CLLocationCoordinate2DMake(center.latitude + 0.001, center.longitude + 0.001);
        var southWest = CLLocationCoordinate2DMake(center.latitude - 0.001, center.longitude - 0.001);
        var viewport = new GMSCoordinateBounds({ coordinate: northEast, coordinate2: southWest });
        var config = new GMSPlacePickerConfig({viewport: viewport});
        this._gsmpp = new GMSPlacePickerViewController({config:config})
        
        this._gsmpp.delegate = new PlacePickerDelegate().initWith(this);
    }

    private get currentPage():Page{
        return topmost().currentPage;
    }

    public static iosProvideAPIKey(key:string){
        // TODO: check if it previously set
        GMSPlacesClient.provideAPIKey(key);
        GMSServices.provideAPIKey(key);
    }

    public present(): Promise<SelectedPlace>{
        
        if (this._resolve || this._reject) {
            return Promise.reject(new Error("Selection is allready in progress..."));
        } else {
            return new Promise<SelectedPlace>((resolve, reject) => {
                this._resolve = resolve;
                this._reject = reject;
                this.currentPage.ios.presentViewControllerAnimatedCompletion(this._gsmpp, true, null);
            });
        }
    }

    public error(error){
        this._reject(new Error("Place picker error: "+error))
        this._reject = null;
        this._resolve = null;
    }

    public done(place){
        this._resolve(place);
        this._reject = null;
        this._resolve = null;
    }

}