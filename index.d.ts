import { Observable } from 'data/observable';

export interface SelectedPlace {
    nativePlace: any;
    readonly id: string;
    readonly name: string;
    readonly address: string;
    readonly latitude: string;
    readonly longitude: string;
}

export declare class PlacePicker {
  constructor(initCoords?: {
        latitude: number;
        longitude: number;
    });
  public static iosProvideAPIKey(key:string):void;
  public present(): Promise<SelectedPlace>;
}
