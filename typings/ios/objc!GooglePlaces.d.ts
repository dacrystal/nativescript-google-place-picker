
declare class GMSAddressComponent extends NSObject {

	static alloc(): GMSAddressComponent; // inherited from NSObject

	static new(): GMSAddressComponent; // inherited from NSObject

	readonly name: string;

	readonly type: string;
}

declare class GMSAutocompleteFetcher extends NSObject {

	static alloc(): GMSAutocompleteFetcher; // inherited from NSObject

	static new(): GMSAutocompleteFetcher; // inherited from NSObject

	autocompleteBounds: GMSCoordinateBounds;

	autocompleteFilter: GMSAutocompleteFilter;

	delegate: GMSAutocompleteFetcherDelegate;

	constructor(o: { bounds: GMSCoordinateBounds; filter: GMSAutocompleteFilter; });

	initWithBoundsFilter(bounds: GMSCoordinateBounds, filter: GMSAutocompleteFilter): this;

	sourceTextHasChanged(text: string): void;
}

interface GMSAutocompleteFetcherDelegate extends NSObjectProtocol {

	didAutocompleteWithPredictions(predictions: NSArray<GMSAutocompletePrediction>): void;

	didFailAutocompleteWithError(error: NSError): void;
}
declare var GMSAutocompleteFetcherDelegate: {

	prototype: GMSAutocompleteFetcherDelegate;
};

declare class GMSAutocompleteFilter extends NSObject {

	static alloc(): GMSAutocompleteFilter; // inherited from NSObject

	static new(): GMSAutocompleteFilter; // inherited from NSObject

	country: string;

	type: GMSPlacesAutocompleteTypeFilter;
}

declare class GMSAutocompleteMatchFragment extends NSObject {

	static alloc(): GMSAutocompleteMatchFragment; // inherited from NSObject

	static new(): GMSAutocompleteMatchFragment; // inherited from NSObject

	readonly length: number;

	readonly offset: number;
}

declare class GMSAutocompletePrediction extends NSObject {

	static alloc(): GMSAutocompletePrediction; // inherited from NSObject

	static new(): GMSAutocompletePrediction; // inherited from NSObject

	readonly attributedFullText: NSAttributedString;

	readonly attributedPrimaryText: NSAttributedString;

	readonly attributedSecondaryText: NSAttributedString;

	readonly placeID: string;

	readonly types: NSArray<string>;
}

declare class GMSAutocompleteResultsViewController extends UIViewController implements UISearchResultsUpdating {

	static alloc(): GMSAutocompleteResultsViewController; // inherited from NSObject

	static new(): GMSAutocompleteResultsViewController; // inherited from NSObject

	autocompleteBounds: GMSCoordinateBounds;

	autocompleteFilter: GMSAutocompleteFilter;

	delegate: GMSAutocompleteResultsViewControllerDelegate;

	primaryTextColor: UIColor;

	primaryTextHighlightColor: UIColor;

	secondaryTextColor: UIColor;

	tableCellBackgroundColor: UIColor;

	tableCellSeparatorColor: UIColor;

	tintColor: UIColor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateSearchResultsForSearchController(searchController: UISearchController): void;
}

interface GMSAutocompleteResultsViewControllerDelegate extends NSObjectProtocol {

	didRequestAutocompletePredictionsForResultsController?(resultsController: GMSAutocompleteResultsViewController): void;

	didUpdateAutocompletePredictionsForResultsController?(resultsController: GMSAutocompleteResultsViewController): void;

	resultsControllerDidAutocompleteWithPlace(resultsController: GMSAutocompleteResultsViewController, place: GMSPlace): void;

	resultsControllerDidFailAutocompleteWithError(resultsController: GMSAutocompleteResultsViewController, error: NSError): void;

	resultsControllerDidSelectPrediction?(resultsController: GMSAutocompleteResultsViewController, prediction: GMSAutocompletePrediction): boolean;
}
declare var GMSAutocompleteResultsViewControllerDelegate: {

	prototype: GMSAutocompleteResultsViewControllerDelegate;
};

declare class GMSAutocompleteTableDataSource extends NSObject implements UITableViewDataSource, UITableViewDelegate {

	static alloc(): GMSAutocompleteTableDataSource; // inherited from NSObject

	static new(): GMSAutocompleteTableDataSource; // inherited from NSObject

	autocompleteBounds: GMSCoordinateBounds;

	autocompleteFilter: GMSAutocompleteFilter;

	delegate: GMSAutocompleteTableDataSourceDelegate;

	primaryTextColor: UIColor;

	primaryTextHighlightColor: UIColor;

	secondaryTextColor: UIColor;

	tableCellBackgroundColor: UIColor;

	tableCellSeparatorColor: UIColor;

	tintColor: UIColor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	sourceTextHasChanged(text: string): void;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface GMSAutocompleteTableDataSourceDelegate extends NSObjectProtocol {

	didRequestAutocompletePredictionsForTableDataSource?(tableDataSource: GMSAutocompleteTableDataSource): void;

	didUpdateAutocompletePredictionsForTableDataSource?(tableDataSource: GMSAutocompleteTableDataSource): void;

	tableDataSourceDidAutocompleteWithPlace(tableDataSource: GMSAutocompleteTableDataSource, place: GMSPlace): void;

	tableDataSourceDidFailAutocompleteWithError(tableDataSource: GMSAutocompleteTableDataSource, error: NSError): void;

	tableDataSourceDidSelectPrediction?(tableDataSource: GMSAutocompleteTableDataSource, prediction: GMSAutocompletePrediction): boolean;
}
declare var GMSAutocompleteTableDataSourceDelegate: {

	prototype: GMSAutocompleteTableDataSourceDelegate;
};

declare class GMSAutocompleteViewController extends UIViewController {

	static alloc(): GMSAutocompleteViewController; // inherited from NSObject

	static new(): GMSAutocompleteViewController; // inherited from NSObject

	autocompleteBounds: GMSCoordinateBounds;

	autocompleteFilter: GMSAutocompleteFilter;

	delegate: GMSAutocompleteViewControllerDelegate;

	primaryTextColor: UIColor;

	primaryTextHighlightColor: UIColor;

	secondaryTextColor: UIColor;

	tableCellBackgroundColor: UIColor;

	tableCellSeparatorColor: UIColor;

	tintColor: UIColor;
}

interface GMSAutocompleteViewControllerDelegate extends NSObjectProtocol {

	didRequestAutocompletePredictions?(viewController: GMSAutocompleteViewController): void;

	didUpdateAutocompletePredictions?(viewController: GMSAutocompleteViewController): void;

	viewControllerDidAutocompleteWithPlace(viewController: GMSAutocompleteViewController, place: GMSPlace): void;

	viewControllerDidFailAutocompleteWithError(viewController: GMSAutocompleteViewController, error: NSError): void;

	viewControllerDidSelectPrediction?(viewController: GMSAutocompleteViewController, prediction: GMSAutocompletePrediction): boolean;

	wasCancelled(viewController: GMSAutocompleteViewController): void;
}
declare var GMSAutocompleteViewControllerDelegate: {

	prototype: GMSAutocompleteViewControllerDelegate;
};

declare class GMSPlace extends NSObject {

	static alloc(): GMSPlace; // inherited from NSObject

	static new(): GMSPlace; // inherited from NSObject

	readonly addressComponents: NSArray<GMSAddressComponent>;

	readonly attributions: NSAttributedString;

	readonly coordinate: CLLocationCoordinate2D;

	readonly formattedAddress: string;

	readonly name: string;

	readonly openNowStatus: GMSPlacesOpenNowStatus;

	readonly phoneNumber: string;

	readonly placeID: string;

	readonly priceLevel: GMSPlacesPriceLevel;

	readonly rating: number;

	readonly types: NSArray<string>;

	readonly viewport: GMSCoordinateBounds;

	readonly website: NSURL;
}

declare class GMSPlaceLikelihood extends NSObject implements NSCopying {

	static alloc(): GMSPlaceLikelihood; // inherited from NSObject

	static new(): GMSPlaceLikelihood; // inherited from NSObject

	readonly likelihood: number;

	readonly place: GMSPlace;

	constructor(o: { place: GMSPlace; likelihood: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithPlaceLikelihood(place: GMSPlace, likelihood: number): this;
}

declare class GMSPlaceLikelihoodList extends NSObject {

	static alloc(): GMSPlaceLikelihoodList; // inherited from NSObject

	static new(): GMSPlaceLikelihoodList; // inherited from NSObject

	readonly attributions: NSAttributedString;

	likelihoods: NSArray<GMSPlaceLikelihood>;
}

declare class GMSPlacePhotoMetadata extends NSObject {

	static alloc(): GMSPlacePhotoMetadata; // inherited from NSObject

	static new(): GMSPlacePhotoMetadata; // inherited from NSObject

	readonly attributions: NSAttributedString;

	readonly maxSize: CGSize;
}

declare class GMSPlacePhotoMetadataList extends NSObject {

	static alloc(): GMSPlacePhotoMetadataList; // inherited from NSObject

	static new(): GMSPlacePhotoMetadataList; // inherited from NSObject

	readonly results: NSArray<GMSPlacePhotoMetadata>;
}

declare const enum GMSPlacesAutocompleteTypeFilter {

	kGMSPlacesAutocompleteTypeFilterNoFilter = 0,

	kGMSPlacesAutocompleteTypeFilterGeocode = 1,

	kGMSPlacesAutocompleteTypeFilterAddress = 2,

	kGMSPlacesAutocompleteTypeFilterEstablishment = 3,

	kGMSPlacesAutocompleteTypeFilterRegion = 4,

	kGMSPlacesAutocompleteTypeFilterCity = 5
}

declare class GMSPlacesClient extends NSObject {

	static SDKVersion(): string;

	static alloc(): GMSPlacesClient; // inherited from NSObject

	static new(): GMSPlacesClient; // inherited from NSObject

	static openSourceLicenseInfo(): string;

	static provideAPIKey(key: string): boolean;

	static sharedClient(): GMSPlacesClient;

	addPlaceCallback(place: GMSUserAddedPlace, callback: (p1: GMSPlace, p2: NSError) => void): void;

	autocompleteQueryBoundsFilterCallback(query: string, bounds: GMSCoordinateBounds, filter: GMSAutocompleteFilter, callback: (p1: NSArray<GMSAutocompletePrediction>, p2: NSError) => void): void;

	currentPlaceWithCallback(callback: (p1: GMSPlaceLikelihoodList, p2: NSError) => void): void;

	loadPlacePhotoCallback(photo: GMSPlacePhotoMetadata, callback: (p1: UIImage, p2: NSError) => void): void;

	loadPlacePhotoConstrainedToSizeScaleCallback(photo: GMSPlacePhotoMetadata, maxSize: CGSize, scale: number, callback: (p1: UIImage, p2: NSError) => void): void;

	lookUpPhotosForPlaceIDCallback(placeID: string, callback: (p1: GMSPlacePhotoMetadataList, p2: NSError) => void): void;

	lookUpPlaceIDCallback(placeID: string, callback: (p1: GMSPlace, p2: NSError) => void): void;

	reportDeviceAtPlaceWithID(placeID: string): void;
}

declare const enum GMSPlacesErrorCode {

	kGMSPlacesNetworkError = -1,

	kGMSPlacesServerError = -2,

	kGMSPlacesInternalError = -3,

	kGMSPlacesKeyInvalid = -4,

	kGMSPlacesKeyExpired = -5,

	kGMSPlacesUsageLimitExceeded = -6,

	kGMSPlacesRateLimitExceeded = -7,

	kGMSPlacesDeviceRateLimitExceeded = -8,

	kGMSPlacesAccessNotConfigured = -9,

	kGMSPlacesIncorrectBundleIdentifier = -10,

	kGMSPlacesLocationError = -11
}

declare const enum GMSPlacesOpenNowStatus {

	kGMSPlacesOpenNowStatusYes = 0,

	kGMSPlacesOpenNowStatusNo = 1,

	kGMSPlacesOpenNowStatusUnknown = 2
}

declare const enum GMSPlacesPriceLevel {

	kGMSPlacesPriceLevelUnknown = -1,

	kGMSPlacesPriceLevelFree = 0,

	kGMSPlacesPriceLevelCheap = 1,

	kGMSPlacesPriceLevelMedium = 2,

	kGMSPlacesPriceLevelHigh = 3,

	kGMSPlacesPriceLevelExpensive = 4
}

declare class GMSUserAddedPlace extends NSObject {

	static alloc(): GMSUserAddedPlace; // inherited from NSObject

	static new(): GMSUserAddedPlace; // inherited from NSObject

	address: string;

	coordinate: CLLocationCoordinate2D;

	name: string;

	phoneNumber: string;

	types: NSArray<string>;

	website: string;
}

declare var kGMSAutocompleteMatchAttribute: string;

declare var kGMSPlaceTypeAccounting: string;

declare var kGMSPlaceTypeAdministrativeAreaLevel1: string;

declare var kGMSPlaceTypeAdministrativeAreaLevel2: string;

declare var kGMSPlaceTypeAdministrativeAreaLevel3: string;

declare var kGMSPlaceTypeAdministrativeAreaLevel4: string;

declare var kGMSPlaceTypeAdministrativeAreaLevel5: string;

declare var kGMSPlaceTypeAirport: string;

declare var kGMSPlaceTypeAmusementPark: string;

declare var kGMSPlaceTypeAquarium: string;

declare var kGMSPlaceTypeArtGallery: string;

declare var kGMSPlaceTypeAtm: string;

declare var kGMSPlaceTypeBakery: string;

declare var kGMSPlaceTypeBank: string;

declare var kGMSPlaceTypeBar: string;

declare var kGMSPlaceTypeBeautySalon: string;

declare var kGMSPlaceTypeBicycleStore: string;

declare var kGMSPlaceTypeBookStore: string;

declare var kGMSPlaceTypeBowlingAlley: string;

declare var kGMSPlaceTypeBusStation: string;

declare var kGMSPlaceTypeCafe: string;

declare var kGMSPlaceTypeCampground: string;

declare var kGMSPlaceTypeCarDealer: string;

declare var kGMSPlaceTypeCarRental: string;

declare var kGMSPlaceTypeCarRepair: string;

declare var kGMSPlaceTypeCarWash: string;

declare var kGMSPlaceTypeCasino: string;

declare var kGMSPlaceTypeCemetery: string;

declare var kGMSPlaceTypeChurch: string;

declare var kGMSPlaceTypeCityHall: string;

declare var kGMSPlaceTypeClothingStore: string;

declare var kGMSPlaceTypeColloquialArea: string;

declare var kGMSPlaceTypeConvenienceStore: string;

declare var kGMSPlaceTypeCountry: string;

declare var kGMSPlaceTypeCourthouse: string;

declare var kGMSPlaceTypeDentist: string;

declare var kGMSPlaceTypeDepartmentStore: string;

declare var kGMSPlaceTypeDoctor: string;

declare var kGMSPlaceTypeElectrician: string;

declare var kGMSPlaceTypeElectronicsStore: string;

declare var kGMSPlaceTypeEmbassy: string;

declare var kGMSPlaceTypeEstablishment: string;

declare var kGMSPlaceTypeFinance: string;

declare var kGMSPlaceTypeFireStation: string;

declare var kGMSPlaceTypeFloor: string;

declare var kGMSPlaceTypeFlorist: string;

declare var kGMSPlaceTypeFood: string;

declare var kGMSPlaceTypeFuneralHome: string;

declare var kGMSPlaceTypeFurnitureStore: string;

declare var kGMSPlaceTypeGasStation: string;

declare var kGMSPlaceTypeGeneralContractor: string;

declare var kGMSPlaceTypeGeocode: string;

declare var kGMSPlaceTypeGroceryOrSupermarket: string;

declare var kGMSPlaceTypeGym: string;

declare var kGMSPlaceTypeHairCare: string;

declare var kGMSPlaceTypeHardwareStore: string;

declare var kGMSPlaceTypeHealth: string;

declare var kGMSPlaceTypeHinduTemple: string;

declare var kGMSPlaceTypeHomeGoodsStore: string;

declare var kGMSPlaceTypeHospital: string;

declare var kGMSPlaceTypeInsuranceAgency: string;

declare var kGMSPlaceTypeIntersection: string;

declare var kGMSPlaceTypeJewelryStore: string;

declare var kGMSPlaceTypeLaundry: string;

declare var kGMSPlaceTypeLawyer: string;

declare var kGMSPlaceTypeLibrary: string;

declare var kGMSPlaceTypeLiquorStore: string;

declare var kGMSPlaceTypeLocalGovernmentOffice: string;

declare var kGMSPlaceTypeLocality: string;

declare var kGMSPlaceTypeLocksmith: string;

declare var kGMSPlaceTypeLodging: string;

declare var kGMSPlaceTypeMealDelivery: string;

declare var kGMSPlaceTypeMealTakeaway: string;

declare var kGMSPlaceTypeMosque: string;

declare var kGMSPlaceTypeMovieRental: string;

declare var kGMSPlaceTypeMovieTheater: string;

declare var kGMSPlaceTypeMovingCompany: string;

declare var kGMSPlaceTypeMuseum: string;

declare var kGMSPlaceTypeNaturalFeature: string;

declare var kGMSPlaceTypeNeighborhood: string;

declare var kGMSPlaceTypeNightClub: string;

declare var kGMSPlaceTypePainter: string;

declare var kGMSPlaceTypePark: string;

declare var kGMSPlaceTypeParking: string;

declare var kGMSPlaceTypePetStore: string;

declare var kGMSPlaceTypePharmacy: string;

declare var kGMSPlaceTypePhysiotherapist: string;

declare var kGMSPlaceTypePlaceOfWorship: string;

declare var kGMSPlaceTypePlumber: string;

declare var kGMSPlaceTypePointOfInterest: string;

declare var kGMSPlaceTypePolice: string;

declare var kGMSPlaceTypePolitical: string;

declare var kGMSPlaceTypePostBox: string;

declare var kGMSPlaceTypePostOffice: string;

declare var kGMSPlaceTypePostalCode: string;

declare var kGMSPlaceTypePostalCodePrefix: string;

declare var kGMSPlaceTypePostalCodeSuffix: string;

declare var kGMSPlaceTypePostalTown: string;

declare var kGMSPlaceTypePremise: string;

declare var kGMSPlaceTypeRealEstateAgency: string;

declare var kGMSPlaceTypeRestaurant: string;

declare var kGMSPlaceTypeRoofingContractor: string;

declare var kGMSPlaceTypeRoom: string;

declare var kGMSPlaceTypeRoute: string;

declare var kGMSPlaceTypeRvPark: string;

declare var kGMSPlaceTypeSchool: string;

declare var kGMSPlaceTypeShoeStore: string;

declare var kGMSPlaceTypeShoppingMall: string;

declare var kGMSPlaceTypeSpa: string;

declare var kGMSPlaceTypeStadium: string;

declare var kGMSPlaceTypeStorage: string;

declare var kGMSPlaceTypeStore: string;

declare var kGMSPlaceTypeStreetAddress: string;

declare var kGMSPlaceTypeStreetNumber: string;

declare var kGMSPlaceTypeSublocality: string;

declare var kGMSPlaceTypeSublocalityLevel1: string;

declare var kGMSPlaceTypeSublocalityLevel2: string;

declare var kGMSPlaceTypeSublocalityLevel3: string;

declare var kGMSPlaceTypeSublocalityLevel4: string;

declare var kGMSPlaceTypeSublocalityLevel5: string;

declare var kGMSPlaceTypeSubpremise: string;

declare var kGMSPlaceTypeSubwayStation: string;

declare var kGMSPlaceTypeSynagogue: string;

declare var kGMSPlaceTypeTaxiStand: string;

declare var kGMSPlaceTypeTrainStation: string;

declare var kGMSPlaceTypeTransitStation: string;

declare var kGMSPlaceTypeTravelAgency: string;

declare var kGMSPlaceTypeUniversity: string;

declare var kGMSPlaceTypeVeterinaryCare: string;

declare var kGMSPlaceTypeZoo: string;

declare var kGMSPlacesErrorDomain: string;
