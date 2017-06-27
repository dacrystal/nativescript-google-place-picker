
declare class GMSPlacePicker extends NSObject {

	static alloc(): GMSPlacePicker; // inherited from NSObject

	static new(): GMSPlacePicker; // inherited from NSObject

	readonly config: GMSPlacePickerConfig;

	constructor(o: { config: GMSPlacePickerConfig; });

	initWithConfig(config: GMSPlacePickerConfig): this;

	pickPlaceWithCallback(callback: (p1: GMSPlace, p2: NSError) => void): void;
}

declare class GMSPlacePickerConfig extends NSObject {

	static alloc(): GMSPlacePickerConfig; // inherited from NSObject

	static new(): GMSPlacePickerConfig; // inherited from NSObject

	readonly viewport: GMSCoordinateBounds;

	constructor(o: { viewport: GMSCoordinateBounds; });

	initWithViewport(viewport: GMSCoordinateBounds): this;
}

declare const enum GMSPlacePickerErrorCode {

	kGMSPlacePickerUnknownError = -1,

	kGMSPlacePickerInternalError = -2,

	kGMSPlacePickerInvalidConfig = -3,

	kGMSPlacePickerOverlappingCalls = -4
}

declare class GMSPlacePickerViewController extends UIViewController {

	static alloc(): GMSPlacePickerViewController; // inherited from NSObject

	static new(): GMSPlacePickerViewController; // inherited from NSObject

	delegate: GMSPlacePickerViewControllerDelegate;

	constructor(o: { config: GMSPlacePickerConfig; });

	initWithConfig(config: GMSPlacePickerConfig): this;
}

interface GMSPlacePickerViewControllerDelegate extends NSObjectProtocol {

	placePickerDidCancel?(viewController: GMSPlacePickerViewController): void;

	placePickerDidFailWithError?(viewController: GMSPlacePickerViewController, error: NSError): void;

	placePickerDidPickPlace(viewController: GMSPlacePickerViewController, place: GMSPlace): void;
}
declare var GMSPlacePickerViewControllerDelegate: {

	prototype: GMSPlacePickerViewControllerDelegate;
};

declare var kGMSPlacePickerErrorDomain: string;
