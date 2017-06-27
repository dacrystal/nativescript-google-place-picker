import { SelectedPlace, PlacePicker as PlacePickerDef } from ".";
export declare class PlacePicker implements PlacePickerDef {
    private initCoords;
    private _builder;
    constructor(initCoords?: {
        latitude: number;
        longitude: number;
    });
    static iosProvideAPIKey(key: string): void;
    present(): Promise<SelectedPlace>;
}
