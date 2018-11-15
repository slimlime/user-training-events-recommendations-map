import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { LocationCoordinatePt, TrainingEvent } from './../../models/training-event';
import { GeolocationService } from './../../services/geolocation.service';
import { MockTrainingEventApiService } from './../../services/mock-training-event-api.service';

import { } from 'googlemaps';
declare let google: any;
@Component({
  selector: 'app-map-view-page',
  templateUrl: './map-view-page.component.html',
  styleUrls: ['./map-view-page.component.scss']
})
export class MapViewPageComponent implements OnInit, AfterViewInit {
  // # hashtag template reference variable
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(
    public geolocationService: GeolocationService,
    public trainingEventApiService: MockTrainingEventApiService
  ) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.map = this.initMap();

    const trainingEvent = this.trainingEventApiService.getEventByID(1);

    const trainingEventsAnyLocation = this.trainingEventApiService
      .getMostRecentUpcomingEvents()
    ;
    this.setupTrainingEventsMarkers(this.map, trainingEventsAnyLocation);
  }

  /**
   * Setup map with options
   *
   * @memberof MapViewPageComponent
   */
  initMap(): google.maps.Map {
    const mapProp: google.maps.MapOptions = {
      center: new google.maps.LatLng(-27.46794, 153.02809),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    const googleMap = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    return googleMap;
  }

  setupTrainingEventsMarkers(
    googleMap: google.maps.Map,
    trainingEvents: TrainingEvent[]) {

    // Plot marker for each event
    trainingEvents.forEach((trainingEvent: TrainingEvent) => {
      this.setupTrainingEventMarker(googleMap, trainingEvent);
    });

  }
  /**
   * Sets up markers to plot training event information on map.
   * Added associated infowindow to open on marker click.
   * @param {google.maps.Map} googleMap the map to apply the marker onto.
   * @param {TrainingEvent} trainingEvent the training event for marker details.
   * @memberof MapViewPageComponent
   */
  setupTrainingEventMarker(
    googleMap: google.maps.Map,
    trainingEvent: TrainingEvent
  ): google.maps.Marker {
    // Setup marker
    const markerCoordinates: any = {
      lat: trainingEvent.locationCoordinates[0],
      lng: trainingEvent.locationCoordinates[1]
    }; // ?  bug () => explicitly typing google.maps.LatLng object.

    const markerOptions: google.maps.MarkerOptions = {
      position: markerCoordinates,
      map: googleMap,             // can add to map here or call setMap() later.
      title: trainingEvent.title
    };

    // Setup content for info window
    const contentHtml = '<div>' +
      '<h2>' +
      trainingEvent.title +
      '</h2>' +
      trainingEvent.description +
      '</div>'
    ;
    // Setup info window for extended description on marker click.
    const eventInfoWindowOptions: google.maps.InfoWindowOptions = {
      content: contentHtml
    };
    const eventInfoWindow: google.maps.InfoWindow = new google.maps.InfoWindow({

      eventInfoWindowOptions
    });
    console.log('​MapViewPageComponent:: eventInfoWindow', eventInfoWindow);
    // Create marker
    const marker: google.maps.Marker = new google.maps.Marker(markerOptions);
    console.log('​MapViewPageComponent:: marker', marker);

    // Add info window to marker for click event.
    marker.addListener(
      'click',
      (markerClickData: any) => {
        console.log('​MapViewPageComponent:: markerClickData', markerClickData);
        eventInfoWindow.open(googleMap, marker);
      }
    );

    return marker;
  }

  /**
   * Get user location in response to user input.
   * On page load results in a [Violation]
   * @returns {LocationCoordinatePt}
   * @memberof MapViewPageComponent
   */
  getUserLocation(): LocationCoordinatePt {
    const userLocation = this.geolocationService.getUserLocation();
    console.log('​MapViewPageComponent:: getUserLocation() -> userLocation', userLocation);
    return userLocation;
  }

  // plotUserLocation
}
