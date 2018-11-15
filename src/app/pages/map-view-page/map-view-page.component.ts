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
    this.initMap();
  }
  initMap() {
    const mapProp: google.maps.MapOptions = {
      center: new google.maps.LatLng(-27.46794, 153.02809),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
}
