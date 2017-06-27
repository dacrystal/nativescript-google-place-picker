import { SelectedPlace, PlacePicker as PlacePickerDef } from ".";
export declare class PlacePickerDelegate extends NSObject implements GMSPlacePickerViewControllerDelegate {
    static ObjCProtocols: {
        prototype: GMSPlacePickerViewControllerDelegate;
    }[];
    private _placePicker;
    placePickerDidCancel(viewController: GMSPlacePickerViewController): void;
    placePickerDidFailWithError(viewController: GMSPlacePickerViewController, error: NSError): void;
    placePickerDidPickPlace(viewController: GMSPlacePickerViewController, place: GMSPlace): void;
    initWith(p: PlacePicker): PlacePickerDelegate;
}
export declare class PlacePicker implements PlacePickerDef {
    private initCoords;
    private _resolve;
    private _reject;
    private _gsmpp;
    constructor(initCoords?: {
        latitude: number;
        longitude: number;
    });
    private readonly currentPage;
    static iosProvideAPIKey(key: string): void;
    present(): Promise<SelectedPlace>;
    error(error: any): void;
    done(place: any): void;
}
