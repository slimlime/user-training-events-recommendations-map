import { LocationCoordinatePt, TrainingEvent } from './../../models/training-event';
/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { GeolocationService } from './../../services/geolocation.service';
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

  constructor( public geolocationService: GeolocationService) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.map = this.initMap();
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

  setupTrainingEventMarker(googleMap: google.maps.Map, trainingEvent: TrainingEvent) {
    const markerCoordinates: any = {
      lat: trainingEvent.locationCoordinates[0],
      lng: trainingEvent.locationCoordinates[1]
    }; // ?  bug () => explicitly typing google.maps.LatLng object.

    const markerOptions: any = {
      position: markerCoordinates,
      map: googleMap,             // can add to map here or call setMap() later.
      title: trainingEvent.title
    };
    const marker: google.maps.Marker = new google.maps.Marker(markerOptions)
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

}
