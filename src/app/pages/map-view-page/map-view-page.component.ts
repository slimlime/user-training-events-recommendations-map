import { Component, OnInit } from '@angular/core';

import { GeolocationService } from './../../services/geolocation.service';

@Component({
  selector: 'app-map-view-page',
  templateUrl: './map-view-page.component.html',
  styleUrls: ['./map-view-page.component.scss']
})
export class MapViewPageComponent implements OnInit {

  constructor( public geolocationService: GeolocationService) {

  }

  ngOnInit() {
  }

}
