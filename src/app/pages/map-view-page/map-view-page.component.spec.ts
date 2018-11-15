import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapViewPageComponent } from './map-view-page.component';
import { InjectionToken } from '@angular/core';
// Need mock-google maps
// declare let google: any;
require('src/app/mocks/google-maps-mock');
export const GOOGLE = new InjectionToken('google');
export const googleFactory = () => google;

const mockedGoogle = {
  google: {
    maps: {
      Animation: {},
      BicyclingLayer: function () { },
      Circle: function () { },
      ControlPosition: {},
      Data: function () { },
      DirectionsRenderer: function () { },
      DirectionsService: function () { },
      DirectionsStatus: {},
      DirectionsTravelMode: {},
      DirectionsUnitSystem: {},
      DistanceMatrixElementStatus: {},
      DistanceMatrixService: function () { },
      DistanceMatrixStatus: {},
      ElevationService: function () { },
      ElevationStatus: {},
      FusionTablesLayer: function () { },
      Geocoder: function () { },
      GeocoderLocationType: {},
      GeocoderStatus: {},
      GroundOverlay: function () { },
      ImageMapType: function () { },
      InfoWindow: function () { },
      KmlLayer: function () { },
      KmlLayerStatus: {},
      LatLng: function () { },
      LatLngBounds: function () { },
      MVCArray: function () { },
      MVCObject: function () { },
      Map: function () {
        return {
          setTilt: function () { },
          mapTypes: {
            set: function () { }
          },
          overlayMapTypes: {
            insertAt: function () { },
            removeAt: function () { }
          }
        };
      },
      MapTypeControlStyle: {},
      MapTypeId: {
        HYBRID: '',
        ROADMAP: '',
        SATELLITE: '',
        TERRAIN: ''
      },
      MapTypeRegistry: function () { },
      Marker: function () { },
      MarkerImage: function () { },
      MaxZoomService: function () {
        return {
          getMaxZoomAtLatLng: function () { }
        };
      },
      MaxZoomStatus: {},
      NavigationControlStyle: {},
      OverlayView: function () { },
      Point: function () { },
      Polygon: function () { },
      Polyline: function () { },
      Rectangle: function () { },
      SaveWidget: function () { },
      ScaleControlStyle: {},
      Size: function () { },
      StreetViewCoverageLayer: function () { },
      StreetViewPanorama: function () { },
      StreetViewService: function () { },
      StreetViewStatus: {},
      StrokePosition: {},
      StyledMapType: function () { },
      SymbolPath: {},
      TrafficLayer: function () { },
      TransitLayer: function () { },
      TransitMode: {},
      TransitRoutePreference: {},
      TravelMode: {},
      UnitSystem: {},
      ZoomControlStyle: {},
      __gjsload__: function () { },
      event: {
        addListener: function () { }
      },
      places: {
        AutocompleteService: function () {
          return {
            getPlacePredictions: function () { }
          };
        }
      }
    }
  }
};
describe('MapViewPageComponent', () => {
  let component: MapViewPageComponent;
  let fixture: ComponentFixture<MapViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapViewPageComponent ],
      providers: [
        {
          provide: GOOGLE,
          useFactory: googleFactory
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

