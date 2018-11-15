import { LocationCoordinates, LocationCoordinatePt } from './../models/training-event';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  userLocation: LocationCoordinatePt = {
    latitude: -27.1,
    longitude: 153
  };

  constructor() { }

  /**
   * Get user location from standard HTML5 Geolocation API
   *
   * @memberof GeolocationService
   */
  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        console.log('​GeolocationService:: getUserLocation() -> position', position);

        // Updates service userLocation
        this.userLocation = position.coords;
      });
    }
    return this.userLocation;
  }



}
