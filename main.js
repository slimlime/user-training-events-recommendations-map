(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/event-detail/event-detail.component */ "./src/app/components/event-detail/event-detail.component.ts");
/* harmony import */ var _pages_map_view_page_map_view_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/map-view-page/map-view-page.component */ "./src/app/pages/map-view-page/map-view-page.component.ts");
/* harmony import */ var _pages_master_events_list_page_master_events_list_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/master-events-list-page/master-events-list-page.component */ "./src/app/pages/master-events-list-page/master-events-list-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    // Default redirect to MasterEventsListPage
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    },
    {
        path: 'events',
        component: _pages_master_events_list_page_master_events_list_page_component__WEBPACK_IMPORTED_MODULE_4__["MasterEventsListPageComponent"]
    },
    {
        path: 'events/details/:id',
        component: _components_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_2__["EventDetailComponent"]
    },
    {
        path: 'events/map',
        component: _pages_map_view_page_map_view_page_component__WEBPACK_IMPORTED_MODULE_3__["MapViewPageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to UserLocationTrainingEventMapRecommendations!\n  </h1>\n</div>\n\n<ul>\n  <li>\n    <a routerLink=\"events/map\">\n      Map\n    </a>\n  </li>\n  <li>\n    <a routerLink=\"events/\">\n      Events list\n    </a>\n  <li>\n    <a routerLink=\"events/details/1\">\n      Event details by id\n    </a>\n  </li>\n</ul>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_master_events_list_page_master_events_list_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/master-events-list-page/master-events-list-page.component */ "./src/app/pages/master-events-list-page/master-events-list-page.component.ts");
/* harmony import */ var _pages_map_view_page_map_view_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/map-view-page/map-view-page.component */ "./src/app/pages/map-view-page/map-view-page.component.ts");
/* harmony import */ var _components_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/event-detail/event-detail.component */ "./src/app/components/event-detail/event-detail.component.ts");
/* harmony import */ var _components_event_list_item_event_list_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/event-list-item/event-list-item.component */ "./src/app/components/event-list-item/event-list-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_master_events_list_page_master_events_list_page_component__WEBPACK_IMPORTED_MODULE_4__["MasterEventsListPageComponent"],
                _pages_map_view_page_map_view_page_component__WEBPACK_IMPORTED_MODULE_5__["MapViewPageComponent"],
                _components_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_6__["EventDetailComponent"],
                _components_event_list_item_event_list_item_component__WEBPACK_IMPORTED_MODULE_7__["EventListItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/event-detail/event-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/event-detail/event-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre>\n  Full Training Event details\n  ID: {{trainingEvent.id}}\n  Title: {{trainingEvent.title}}\n\n  imageUrl: {{trainingEvent.imageUrl}}\n  dateTime: {{trainingEvent.dateTime}}\n  availableSeats: {{trainingEvent.availableSeats}}\n  locationCityName: {{trainingEvent.locationCityName}}\n  locationCoordinates: {{trainingEvent.locationCoordinates}}\n  description: {{trainingEvent.description}}\n</pre>"

/***/ }),

/***/ "./src/app/components/event-detail/event-detail.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/event-detail/event-detail.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/event-detail/event-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/event-detail/event-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: EventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return EventDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_mock_training_event_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/mock-training-event-api.service */ "./src/app/services/mock-training-event-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventDetailComponent = /** @class */ (function () {
    function EventDetailComponent(activatedRoute, trainingEventApiService) {
        this.activatedRoute = activatedRoute;
        this.trainingEventApiService = trainingEventApiService;
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        var trainingEvent = this.getEventInformation(this.activatedRoute, this.trainingEventApiService);
        this.trainingEvent = trainingEvent;
    };
    /**
     *
     *
     * @param {ActivatedRoute} activatedRoute
     * @param {MockTrainingEventApiService} eventApi
     * @returns {TrainingEvent}
     * @memberof EventDetailComponent
     */
    EventDetailComponent.prototype.getEventInformation = function (activatedRoute, eventApi) {
        // Get parameter string id and convert to number.
        var eventIDParam = activatedRoute.snapshot.paramMap.get('id');
        var eventID = +eventIDParam;
        // Get event information for the given id.
        var trainingEvent = eventApi.getEventByID(+eventID);
        return trainingEvent;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EventDetailComponent.prototype, "trainingEvent", void 0);
    EventDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__(/*! ./event-detail.component.html */ "./src/app/components/event-detail/event-detail.component.html"),
            styles: [__webpack_require__(/*! ./event-detail.component.scss */ "./src/app/components/event-detail/event-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_mock_training_event_api_service__WEBPACK_IMPORTED_MODULE_2__["MockTrainingEventApiService"]])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/event-list-item/event-list-item.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/event-list-item/event-list-item.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <!-- Need actual image -->\n  <!-- Search for id details? or just pass the data in shared service or i/o bind -->\n  <a (click)=\"navigateToEventDetail(this.router, trainingEvent)\"  class=\"thumb\">\n    <img src=\"{{trainingEvent.imageUrl}}\" alt=\"{{trainingEvent.title}}\" />\n  </a>\n  {{trainingEvent.dateTime}}\n  {{trainingEvent.title}}\n\n\n  <!-- {{trainingEvent.imageUrl}} -->\n\n  {{trainingEvent.availableSeats}}\n  {{trainingEvent.locationCityName}}\n\n</p>\n"

/***/ }),

/***/ "./src/app/components/event-list-item/event-list-item.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/event-list-item/event-list-item.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/event-list-item/event-list-item.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/event-list-item/event-list-item.component.ts ***!
  \*************************************************************************/
/*! exports provided: EventListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListItemComponent", function() { return EventListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventListItemComponent = /** @class */ (function () {
    function EventListItemComponent(router) {
        this.router = router;
    }
    EventListItemComponent.prototype.ngOnInit = function () {
    };
    EventListItemComponent.prototype.navigateToEventDetail = function (router, trainingEvent) {
        router.navigate(['events/details', trainingEvent.id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EventListItemComponent.prototype, "trainingEvent", void 0);
    EventListItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-list-item',
            template: __webpack_require__(/*! ./event-list-item.component.html */ "./src/app/components/event-list-item/event-list-item.component.html"),
            styles: [__webpack_require__(/*! ./event-list-item.component.scss */ "./src/app/components/event-list-item/event-list-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EventListItemComponent);
    return EventListItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/map-view-page/map-view-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/map-view-page/map-view-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  map-view-page works!\n</p>\n<button (click)=\"getUserLocation()\">Check for events near me</button>\n<div #gmap style=\"width:100%;height:400px\">\n  \n</div>\n"

/***/ }),

/***/ "./src/app/pages/map-view-page/map-view-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/map-view-page/map-view-page.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/map-view-page/map-view-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/map-view-page/map-view-page.component.ts ***!
  \****************************************************************/
/*! exports provided: MapViewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapViewPageComponent", function() { return MapViewPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/geolocation.service */ "./src/app/services/geolocation.service.ts");
/* harmony import */ var _services_mock_training_event_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/mock-training-event-api.service */ "./src/app/services/mock-training-event-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapViewPageComponent = /** @class */ (function () {
    function MapViewPageComponent(geolocationService, trainingEventApiService) {
        this.geolocationService = geolocationService;
        this.trainingEventApiService = trainingEventApiService;
    }
    MapViewPageComponent.prototype.ngOnInit = function () {
    };
    MapViewPageComponent.prototype.ngAfterViewInit = function () {
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        this.map = this.initMap();
        var trainingEvent = this.trainingEventApiService.getEventByID(1);
        var trainingEventsAnyLocation = this.trainingEventApiService
            .getMostRecentUpcomingEvents();
        this.setupTrainingEventsMarkers(this.map, trainingEventsAnyLocation);
    };
    /**
     * Setup map with options
     *
     * @memberof MapViewPageComponent
     */
    MapViewPageComponent.prototype.initMap = function () {
        var mapProp = {
            center: new google.maps.LatLng(-27.46794, 153.02809),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var googleMap = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        return googleMap;
    };
    /**
     * Setup Google Maps Markers for all the training events in the array
     *
     * @param {google.maps.Map} googleMap
     * @param {TrainingEvent[]} trainingEvents
     * @memberof MapViewPageComponent
     */
    MapViewPageComponent.prototype.setupTrainingEventsMarkers = function (googleMap, trainingEvents) {
        var _this = this;
        // Plot marker for each event
        trainingEvents.forEach(function (trainingEvent) {
            _this.setupTrainingEventMarker(googleMap, trainingEvent);
        });
    };
    /**
     * Sets up markers to plot training event information on map.
     * Added associated infowindow to open on marker click.
     * @param {google.maps.Map} googleMap the map to apply the marker onto.
     * @param {TrainingEvent} trainingEvent the training event for marker details.
     * @memberof MapViewPageComponent
     */
    MapViewPageComponent.prototype.setupTrainingEventMarker = function (googleMap, trainingEvent) {
        // Setup marker
        var markerCoordinates = {
            lat: trainingEvent.locationCoordinates[0],
            lng: trainingEvent.locationCoordinates[1]
        }; // ?  bug () => explicitly typing google.maps.LatLng object.
        var markerOptions = {
            position: markerCoordinates,
            map: googleMap,
            title: trainingEvent.title
        };
        // Setup content for info window
        var contentHtml = '<div>' +
            '<h2>' +
            trainingEvent.title +
            ' id: ' + trainingEvent.id +
            ' city: ' + trainingEvent.locationCityName +
            ' coord: ' + trainingEvent.locationCoordinates +
            ' dateTime: ' + trainingEvent.dateTime +
            '</h2>' +
            trainingEvent.description +
            '</div>';
        // Setup info window for extended description on marker click.
        var eventInfoWindowOptions = {
            content: contentHtml
        };
        var eventInfoWindow = new google.maps.InfoWindow(eventInfoWindowOptions);
        console.log('​MapViewPageComponent:: eventInfoWindow', eventInfoWindow);
        // Create marker
        var marker = new google.maps.Marker(markerOptions);
        console.log('​MapViewPageComponent:: marker', marker);
        // Add info window to marker for click event.
        marker.addListener('click', function (markerClickData) {
            console.log('​MapViewPageComponent:: markerClickData', markerClickData);
            eventInfoWindow.open(googleMap, marker);
        });
        return marker;
    };
    /**
     * Get user location in response to user input.
     * On page load results in a [Violation]
     * @returns {LocationCoordinatePt}
     * @memberof MapViewPageComponent
     */
    MapViewPageComponent.prototype.getUserLocation = function () {
        var userLocation = this.geolocationService.getUserLocation();
        console.log('​MapViewPageComponent:: getUserLocation() -> userLocation', userLocation);
        return userLocation;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], MapViewPageComponent.prototype, "gmapElement", void 0);
    MapViewPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-view-page',
            template: __webpack_require__(/*! ./map-view-page.component.html */ "./src/app/pages/map-view-page/map-view-page.component.html"),
            styles: [__webpack_require__(/*! ./map-view-page.component.scss */ "./src/app/pages/map-view-page/map-view-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_geolocation_service__WEBPACK_IMPORTED_MODULE_1__["GeolocationService"],
            _services_mock_training_event_api_service__WEBPACK_IMPORTED_MODULE_2__["MockTrainingEventApiService"]])
    ], MapViewPageComponent);
    return MapViewPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/master-events-list-page/master-events-list-page.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/master-events-list-page/master-events-list-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  master-events-list-page works!\n</p>\n<h4>Upcoming local events</h4>\n<button (click)=\"getUserLocation()\">Check for events near me</button>\n<ul>\n  <li *ngFor=\"let trainingEventItem of this.upcomingTrainingEvents\">\n    <app-event-list-item [trainingEvent]=\"trainingEventItem\">\n    </app-event-list-item>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/pages/master-events-list-page/master-events-list-page.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/master-events-list-page/master-events-list-page.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/master-events-list-page/master-events-list-page.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/master-events-list-page/master-events-list-page.component.ts ***!
  \************************************************************************************/
/*! exports provided: MasterEventsListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterEventsListPageComponent", function() { return MasterEventsListPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/geolocation.service */ "./src/app/services/geolocation.service.ts");
/* harmony import */ var _services_mock_training_event_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/mock-training-event-api.service */ "./src/app/services/mock-training-event-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MasterEventsListPageComponent = /** @class */ (function () {
    // Can encapsulate logic in service as needed.
    function MasterEventsListPageComponent(trainingEventApiService, geolocationService) {
        this.trainingEventApiService = trainingEventApiService;
        this.geolocationService = geolocationService;
        // Simpler to concrete the properties here. Could also pass full reactivity.
        this.upcomingTrainingEvents = [];
        this.cityLocation = 'Brisbane'; // default
    }
    MasterEventsListPageComponent.prototype.ngOnInit = function () {
        // Get events to populate list.
        var upcomingEventsRecentAtCity = this.populateTrainingEventsInCity(this.cityLocation);
        this.upcomingTrainingEvents = upcomingEventsRecentAtCity;
    };
    /**
     * Gets training events for a city location name.
     *
     * @param {string} cityLocation
     * @returns
     * @memberof MasterEventsListPageComponent
     */
    MasterEventsListPageComponent.prototype.populateTrainingEventsInCity = function (cityLocation) {
        var upcomingSortedEventsAtCity = this.trainingEventApiService
            .getMostRecentUpcomingEventsNumSliceInCityLocation(cityLocation);
        console.log('​MasterEventsListPageComponent:: ngOnInit() -> upcomingSortedEventsAtBrisbane', upcomingSortedEventsAtCity);
        return upcomingSortedEventsAtCity;
    };
    // populateTrainingEventsNearUserLocation(userLocation: LocationCoordinatePt): TrainingEvent[] {
    // }
    /**
     * Get user location in response to user input.
     * On page load results in a [Violation]
     *
     * @memberof MasterEventsListPageComponent
     */
    MasterEventsListPageComponent.prototype.getUserLocation = function () {
        var userLocation = this.geolocationService.getUserLocation();
        console.log('​MasterEventsListPageComponent:: ngOnInit() -> userLocation', userLocation);
        return userLocation;
    };
    /**
     * User explicit check for events near user location.
     *
     * @memberof MasterEventsListPageComponent
     */
    MasterEventsListPageComponent.prototype.checkForEvents = function () {
        this.getUserLocation();
        this.populateTrainingEventsInCity('Brisbane');
    };
    MasterEventsListPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-master-events-list-page',
            template: __webpack_require__(/*! ./master-events-list-page.component.html */ "./src/app/pages/master-events-list-page/master-events-list-page.component.html"),
            styles: [__webpack_require__(/*! ./master-events-list-page.component.scss */ "./src/app/pages/master-events-list-page/master-events-list-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_mock_training_event_api_service__WEBPACK_IMPORTED_MODULE_2__["MockTrainingEventApiService"],
            _services_geolocation_service__WEBPACK_IMPORTED_MODULE_1__["GeolocationService"]])
    ], MasterEventsListPageComponent);
    return MasterEventsListPageComponent;
}());



/***/ }),

/***/ "./src/app/seed/seed-training-events.ts":
/*!**********************************************!*\
  !*** ./src/app/seed/seed-training-events.ts ***!
  \**********************************************/
/*! exports provided: DATA_SEED_TRAINING_EVENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_SEED_TRAINING_EVENTS", function() { return DATA_SEED_TRAINING_EVENTS; });
var DATA_DESCRIPTION_PLACEHOLDER_TEXT = 'Lorem ipsum dolor sit amet,' +
    'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' +
    'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
    'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
// lol. Magic numbers. -- TODO: Encapsulate logic. YAGNI.
var millisecondsPerSecond = 1000;
var secondsPerMinute = 60;
var minutesPerHour = 60;
var hoursPerDay = 24;
var daysPerYear = 365;
/**
 * Get random integer from a given max range.
 * 0..max
 * @param {*} maxEpochSeconds Max top range.
 * @returns {number}
 */
function getRandomInt(maxEpochSeconds) {
    var pseudorandomFraction = Math.random() * maxEpochSeconds;
    // Rounds to int. floor/ceil.
    var pseudorandomInt = Math.floor(pseudorandomFraction);
    return pseudorandomInt;
}
function getRandomFutureEpoch(givenCurrentDateTimeEpoch) {
}
/**
 * Generate ISO 8601 seed date time for future events from current datetime.
 * -- Can decompose some parts. Epoch separate from ISOString test.
 * -- TODO: move to random generation to Mock provider/service. Static utility?
 * @returns {string} Future DateTime in ISO 8601 format.
 */
function generateFutureDateIso8601() {
    // Get current DateTime. Date uses epoch in milliseconds.
    var currentDateTimeEpoch = Date.now();
    // Set range for randomiser ( testing a range of days within a year. )
    var millisecondsPerYear = millisecondsPerSecond *
        secondsPerMinute *
        minutesPerHour *
        hoursPerDay *
        daysPerYear;
    var maxSecondsLimitRange = millisecondsPerYear;
    // Get randomised epoch ms to add to current DateTime to get future DateTime
    var randomFutureEpochAdd = getRandomInt(maxSecondsLimitRange);
    var futureEpoch = currentDateTimeEpoch + randomFutureEpochAdd;
    var futureDate = new Date(futureEpoch);
    var futureDateIso8601 = futureDate.toISOString();
    return futureDateIso8601;
}
// Seed data
var DATA_SEED_TRAINING_EVENTS = [
    {
        id: 1,
        title: 'Event Title A',
        dateTime: generateFutureDateIso8601(),
        imageUrl: 'http://via.placeholder.com/100x100',
        availableSeats: 128,
        locationCityName: 'Brisbane',
        locationCoordinates: [-27.4697707, 153.025123],
        description: DATA_DESCRIPTION_PLACEHOLDER_TEXT
    },
    {
        id: 2,
        title: 'Event Title B',
        dateTime: generateFutureDateIso8601(),
        imageUrl: 'http://via.placeholder.com/100x100',
        availableSeats: 128,
        locationCityName: 'Brisbane',
        locationCoordinates: [-27.597707, 154.025123],
        description: DATA_DESCRIPTION_PLACEHOLDER_TEXT
    },
    {
        id: 3,
        title: 'Event Title C',
        dateTime: generateFutureDateIso8601(),
        imageUrl: 'http://via.placeholder.com/100x100',
        availableSeats: 128,
        locationCityName: 'Brisbane',
        locationCoordinates: [-27.4897707, 153.025123],
        description: DATA_DESCRIPTION_PLACEHOLDER_TEXT
    },
    {
        id: 4,
        title: 'Event Title D',
        dateTime: generateFutureDateIso8601(),
        imageUrl: 'http://via.placeholder.com/100x100',
        availableSeats: 128,
        locationCityName: 'Brisbane',
        locationCoordinates: [-27.4697707, 153.025123],
        description: DATA_DESCRIPTION_PLACEHOLDER_TEXT
    },
    {
        id: 5,
        title: 'Event Title E',
        dateTime: generateFutureDateIso8601(),
        imageUrl: 'http://via.placeholder.com/100x100',
        availableSeats: 128,
        locationCityName: 'Brisbane',
        locationCoordinates: [-27.4597707, 153.025123],
        description: DATA_DESCRIPTION_PLACEHOLDER_TEXT
    },
    {
        id: 6,
        title: 'Event Title F',
        dateTime: generateFutureDateIso8601(),
        imageUrl: 'http://via.placeholder.com/100x100',
        availableSeats: 128,
        locationCityName: 'Brisbane',
        locationCoordinates: [-27.4497707, 153.025123],
        description: DATA_DESCRIPTION_PLACEHOLDER_TEXT
    },
    {
        id: 7,
        title: 'Event Title G',
        dateTime: generateFutureDateIso8601(),
        imageUrl: 'http://via.placeholder.com/100x100',
        availableSeats: 128,
        locationCityName: 'Brisbane',
        locationCoordinates: [-27.4697707, 153.015123],
        description: DATA_DESCRIPTION_PLACEHOLDER_TEXT
    },
    {
        id: 8,
        title: 'Event Title H',
        dateTime: generateFutureDateIso8601(),
        imageUrl: 'http://via.placeholder.com/100x100',
        availableSeats: 128,
        locationCityName: 'Brisbane',
        locationCoordinates: [-27.4697707, 153.035123],
        description: DATA_DESCRIPTION_PLACEHOLDER_TEXT
    },
    {
        id: 9,
        title: 'Event Title I',
        dateTime: generateFutureDateIso8601(),
        imageUrl: 'http://via.placeholder.com/100x100',
        availableSeats: 128,
        locationCityName: 'Brisbane',
        locationCoordinates: [-27.4797707, 153.035123],
        description: DATA_DESCRIPTION_PLACEHOLDER_TEXT
    },
    {
        id: 10,
        title: 'Event Title J',
        dateTime: generateFutureDateIso8601(),
        imageUrl: 'http://via.placeholder.com/100x100',
        availableSeats: 128,
        locationCityName: 'Brisbane',
        locationCoordinates: [-27.4497707, 153.045123],
        description: DATA_DESCRIPTION_PLACEHOLDER_TEXT
    },
    {
        id: 11,
        title: 'Event Title Sydney',
        dateTime: generateFutureDateIso8601(),
        imageUrl: 'http://via.placeholder.com/100x100',
        availableSeats: 128,
        locationCityName: 'Sydney',
        locationCoordinates: [-33.8688, 151.2093],
        description: DATA_DESCRIPTION_PLACEHOLDER_TEXT
    },
    {
        id: 12,
        title: 'Event Title Sydney 2',
        dateTime: generateFutureDateIso8601(),
        imageUrl: 'http://via.placeholder.com/100x100',
        availableSeats: 128,
        locationCityName: 'Sydney',
        locationCoordinates: [-33.8688, 151.2043],
        description: DATA_DESCRIPTION_PLACEHOLDER_TEXT
    },
    {
        id: 13,
        title: 'Event Title Melbourne',
        dateTime: generateFutureDateIso8601(),
        imageUrl: 'http://via.placeholder.com/100x100',
        availableSeats: 128,
        locationCityName: 'Sydney',
        locationCoordinates: [-33.8688, 151.2043],
        description: DATA_DESCRIPTION_PLACEHOLDER_TEXT
    },
    {
        id: 14,
        title: 'Event Title Melbourne 2',
        dateTime: generateFutureDateIso8601(),
        imageUrl: 'http://via.placeholder.com/100x100',
        availableSeats: 128,
        locationCityName: 'Sydney',
        locationCoordinates: [-33.8688, 151.2043],
        description: DATA_DESCRIPTION_PLACEHOLDER_TEXT
    }
];


/***/ }),

/***/ "./src/app/services/geo-utility.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/geo-utility.service.ts ***!
  \*************************************************/
/*! exports provided: GeoUtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoUtilityService", function() { return GeoUtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Provides utility functions for geospatial calculation
 *
 * @export
 * @class GeoUtilityService
 */
var GeoUtilityService = /** @class */ (function () {
    function GeoUtilityService() {
    }
    /**
    * Helper utility function to convert degrees to radians
    * @param {number} degrees
    * @returns
    * @memberof GeolocationService
    */
    GeoUtilityService.prototype.degreesToRadians = function (degrees) {
        var radians = degrees * (Math.PI / 180);
        return radians;
    };
    /**
     * Haversine formula to calculate great-circle distance between two points
     * Shortest distance over earth surface.
     * http://www.movable-type.co.uk/scripts/latlong.html
     * @param {LocationCoordinatePt} pt1
     * @param {LocationCoordinatePt} pt2
     * @returns
     * @memberof GeolocationService
     */
    GeoUtilityService.prototype.getDistanceKilometresBetweenCoordinates = function (pt1, pt2) {
        // Radius of the earth in kilometres. Authalic radius.
        // May have accuracy differences based on 6371 vs 6372.8
        // But precision less important if using
        var RRadiusOfEarthKm = 6371;
        var diffLat = this.degreesToRadians(pt2.latitude - pt1.latitude);
        var diffLon = this.degreesToRadians(pt2.longitude - pt1.longitude);
        var aSquareHalfChordLengthTwoPts = Math.sin(diffLat / 2) *
            Math.sin(diffLat / 2) +
            Math.cos(this.degreesToRadians(pt1.latitude)) *
                Math.cos(this.degreesToRadians(pt2.latitude)) *
                Math.sin(diffLon / 2) * Math.sin(diffLon / 2);
        var cAngularDistanceTwoPtsRadians = 2 *
            Math.atan2(Math.sqrt(aSquareHalfChordLengthTwoPts), Math.sqrt(1 - aSquareHalfChordLengthTwoPts));
        // Distance in kilometres
        var distance = RRadiusOfEarthKm * cAngularDistanceTwoPtsRadians;
        return distance;
    };
    GeoUtilityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GeoUtilityService);
    return GeoUtilityService;
}());



/***/ }),

/***/ "./src/app/services/geolocation.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/geolocation.service.ts ***!
  \*************************************************/
/*! exports provided: GeolocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationService", function() { return GeolocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GeolocationService = /** @class */ (function () {
    function GeolocationService() {
        this.userLocation = {
            latitude: -27.1,
            longitude: 153
        };
    }
    /**
     * Get user location from standard HTML5 Geolocation API
     *
     * @memberof GeolocationService
     */
    GeolocationService.prototype.getUserLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log('​GeolocationService:: getUserLocation() -> position', position);
                // Updates service userLocation
                _this.userLocation = position.coords;
            });
        }
        return this.userLocation;
    };
    GeolocationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GeolocationService);
    return GeolocationService;
}());



/***/ }),

/***/ "./src/app/services/mock-training-event-api.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/mock-training-event-api.service.ts ***!
  \*************************************************************/
/*! exports provided: MockTrainingEventApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockTrainingEventApiService", function() { return MockTrainingEventApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _seed_seed_training_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../seed/seed-training-events */ "./src/app/seed/seed-training-events.ts");
/* harmony import */ var _geo_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geo-utility.service */ "./src/app/services/geo-utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MockTrainingEventApiService = /** @class */ (function () {
    function MockTrainingEventApiService(geoUtilityService) {
        this.geoUtilityService = geoUtilityService;
    }
    // - TODO: Add asynchronous reactivity e.g. Promise Observable to mock delay in network requests.
    /**
     * Get a specific event searched by ID.
     * -- TODO: Temp function. Can separate training event service from API. Caching
     * @param {number} id
     * @returns {TrainingEvent}
     * @memberof MockTrainingEventApiService
     */
    MockTrainingEventApiService.prototype.getEventByID = function (id) {
        var seedTestData = _seed_seed_training_events__WEBPACK_IMPORTED_MODULE_1__["DATA_SEED_TRAINING_EVENTS"];
        var foundTrainingEvent = seedTestData.find(function (trainingEvent) {
            var trainingIDFound = trainingEvent.id === id;
            return trainingIDFound;
        });
        return foundTrainingEvent;
    };
    /**
     * Default five events
     *
     * @param {number} [numEvents=5] // Unused as need to process whole mock data in app.\
     * API would ideally sort before retrieving the results.
     * Otherwise have to SELECT the whole table just for application usage
     *
     * @returns {TrainingEvent[]}
     * @memberof MockTrainingEventApiService
     */
    MockTrainingEventApiService.prototype.getEvents = function (numEvents) {
        if (numEvents === void 0) { numEvents = 5; }
        var seedTestData = _seed_seed_training_events__WEBPACK_IMPORTED_MODULE_1__["DATA_SEED_TRAINING_EVENTS"];
        return seedTestData;
    };
    /**
     * Default next five 'upcoming' events in order from soonest to latest.
     * Could make more generic.
     *
     * @param {number} [numEventsWanted=5] Default value five upcoming events to retrieve/select.
     * @returns {TrainingEvent[]}
     * @memberof MockTrainingEventApiService
     */
    MockTrainingEventApiService.prototype.getMostRecentUpcomingEvents = function (numEventsWanted) {
        if (numEventsWanted === void 0) { numEventsWanted = 5; }
        var events = this.getEvents(numEventsWanted);
        var mostRecentEvents = this.sortEventsDateTimeSoonest(events);
        console.log('​MockTrainingEventApiService:: constructor() -> mostRecentEvents full list', mostRecentEvents);
        // Get the specified number of events after sorting. E.g. Next five events.
        // First five events slice 0..5 or undefined,5 for optional parameter.
        var mostRecentEventsNextNumSlice = mostRecentEvents.slice(undefined, numEventsWanted);
        console.log('​MockTrainingEventApiService:: constructor() -> mostRecentEventsNextSlice', mostRecentEventsNextNumSlice);
        return mostRecentEventsNextNumSlice;
    };
    /**
     * Get events at the user's current location city to fulfil requirement:
     * *Display events based on user's location.*
     *
     * @param {string} locationCityName
     * @param {number} [numEventsWanted=5]
     * @returns {TrainingEvent[]}
     * @memberof MockTrainingEventApiService
     */
    MockTrainingEventApiService.prototype.getMostRecentUpcomingEventsNumSliceInCityLocation = function (locationCityName, numEventsWanted) {
        var _this = this;
        if (numEventsWanted === void 0) { numEventsWanted = 5; }
        var events = this.getEvents();
        // Get events for a specific city.
        var cityEvents = events.filter(function (trainingEvent) {
            var eventIsAtCity = _this.eventFilterHasCity(trainingEvent, locationCityName);
            return eventIsAtCity;
        });
        var mostRecentUpcomingCityEvents = this.sortEventsDateTimeSoonest(cityEvents);
        var mostRecentUpcomingCityEventsNumSlice = mostRecentUpcomingCityEvents
            .slice(undefined, numEventsWanted);
        return mostRecentUpcomingCityEventsNumSlice;
    };
    /**
     * Get most recent upcoming events closest to coordinates
     * e.g. Pass user location to get most relevant results.
     *
     * @param {LocationCoordinatePt} coordinates
     * @param {number} [numEventsWanted=5]
     * @returns {TrainingEvent[]}
     * @memberof MockTrainingEventApiService
     */
    MockTrainingEventApiService.prototype.getMostRecentUpcomingEventsClosestToCoordinates = function (coordinates, numEventsWanted) {
        // Maybe better to use map bounds?
        // 1. Get the geographically closest training events
        if (numEventsWanted === void 0) { numEventsWanted = 5; }
        // 2. Sort by recent upcoming soonest order.
        // Return num events e.g. 5 results
        return;
    };
    /**
     * Utility function for filtering events array
     *
     * @param {TrainingEvent} trainingEvent
     * @param {string} givenLocationCityName
     * @returns
     * @memberof MockTrainingEventApiService
     */
    MockTrainingEventApiService.prototype.eventFilterHasCity = function (trainingEvent, givenLocationCityName) {
        var trainingEventCityName = trainingEvent.locationCityName;
        var sameCityNameFound = trainingEventCityName === givenLocationCityName;
        return sameCityNameFound;
    };
    /**
     *
     * @example "2019-08-04T00:30:39.038Z" "2019-02-02T03:47:07.045Z"
     * @param {TrainingEvent[]} events
     * @memberof MockTrainingEventApiService
     */
    MockTrainingEventApiService.prototype.sortEventsDateTimeSoonest = function (events) {
        var _this = this;
        // use Array.sort() with custom function
        // ISO 8601 can be sorted lexicographically. Or use Date
        var trainingEvents = events;
        var trainingEventsSortedSoonest = trainingEvents.sort(function (firstGivenEvent, secondComparisonEvent) {
            // If a < b returns -ve or -1, a is the `soonest` upcoming event.
            var comparisonSoonest = _this.compareUpcomingEventSoonest(firstGivenEvent, secondComparisonEvent);
            return comparisonSoonest;
        });
        return trainingEventsSortedSoonest;
    };
    /**
   * Comparison function to get the future event that is happening soonest.
   * The future dates that have least values are closest to the current date.
   * Assumed.
   * For Array.sort();
   * @memberof MockTrainingEventApiService
   */
    MockTrainingEventApiService.prototype.compareUpcomingEventSoonest = function (givenEvent, comparisonEvent) {
        // Comparing the given event DateTime to the other event for comparison
        var soonestFutureComparison = this.compareDateSoonest(givenEvent.dateTime, comparisonEvent.dateTime);
        // If first givenDate is equal to comparisonDate return 0;
        // If first givenDate is smaller, -1 or the negative difference.
        // If first givenDate is larger, +1 (can just use the difference if arith)
        // doesn't matter whether -1 or 0. unless possible recursion?
        return soonestFutureComparison;
    };
    /**
     * Comparison function to get the future event that is happening soonest.
     * The future dates that have least values are closest to the current date.
     * Assumed.
     * Could make this more generic.
     *
     * For Array.sort();
     * @memberof MockTrainingEventApiService
     */
    MockTrainingEventApiService.prototype.compareDateSoonest = function (givenDate, comparisonDate) {
        // Comparing the givenDate to the other comparisonDate
        // If first givenDate is equal to comparisonDate return 0;
        // If first givenDate is smaller, -1 or the negative difference.
        // If first givenDate is larger, +1 (can just use the difference if arith)
        var givenDateIsSooner = givenDate < comparisonDate;
        // doesn't matter whether -1 or 0. unless possible recursion?
        return givenDateIsSooner ? -1 : 1;
    };
    /**
     * Comparison that gets the future event that is most distant from now.
     * The future dates with larger values are further away from current date.
     *
     * @memberof MockTrainingEventApiService
     */
    MockTrainingEventApiService.prototype.compareUpcomingEventLatest = function () {
    };
    MockTrainingEventApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_geo_utility_service__WEBPACK_IMPORTED_MODULE_2__["GeoUtilityService"]])
    ], MockTrainingEventApiService);
    return MockTrainingEventApiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\_proj\_Tech-tests\GO1\UserLocationTrainingEventMapRecommendations\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map