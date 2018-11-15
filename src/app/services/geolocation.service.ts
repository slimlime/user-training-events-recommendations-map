import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  degreesToRadians(degrees) {
    const radians = degrees * (Math.PI / 180);
    return radians;
  }


  getDistanceKilometresBetweenCoordinates(pt1, pt2) {
    const R = 6371; // Radius of the earth in km
    const diffLat = this.degreesToRadians(pt2.latitude - pt1.latitude);
    const diffLon = this.degreesToRadians(pt2.longitude - pt1.longitude);
    const a = Math.sin(diffLat / 2) * Math.sin(diffLat / 2) +
      Math.cos(this.degreesToRadians(pt1.latitude)) *
      Math.cos(this.degreesToRadians(pt2.latitude)) *
      Math.sin(diffLon / 2) * Math.sin(diffLon / 2)
      ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km

    return d;
  }


}
