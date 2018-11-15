import { Injectable } from '@angular/core';

import { LocationCoordinatePt } from './../models/training-event';

/**
 * Provides utility functions for geospatial calculation
 *
 * @export
 * @class GeoUtilityService
 */
@Injectable({
  providedIn: 'root'
})
export class GeoUtilityService {

  constructor() {
    this.degreesToRadians(180); // 3.141592653589793
    this.getDistanceKilometresBetweenCoordinates(
      {
        latitude: -27.3,
        longitude: 153.22
      },
      {
        latitude: -27.32,
        longitude: 153.24
      }
    ); // 2.974956444218144

  }

   /**
   * Helper utility function to convert degrees to radians
   * @param {number} degrees
   * @returns
   * @memberof GeolocationService
   */
  degreesToRadians(degrees: number) {
    const radians = degrees * (Math.PI / 180);
    console.log('​GeoUtilityService:: degreesToRadians() -> radians', radians);
    return radians;
  }

  /**
   * Haversine formula to calculate great-circle distance between two points
   * Shortest distance over earth surface.
   * http://www.movable-type.co.uk/scripts/latlong.html
   * @param {LocationCoordinatePt} pt1
   * @param {LocationCoordinatePt} pt2
   * @returns
   * @memberof GeolocationService
   */
  getDistanceKilometresBetweenCoordinates(
    pt1: LocationCoordinatePt,
    pt2: LocationCoordinatePt
  ) {
    // Radius of the earth in kilometres. Authalic radius.
    // May have accuracy differences based on 6371 vs 6372.8
    // But precision less important if using
    const RRadiusOfEarthKm = 6371;
    const diffLat = this.degreesToRadians(pt2.latitude - pt1.latitude);
    const diffLon = this.degreesToRadians(pt2.longitude - pt1.longitude);
    const aSquareHalfChordLengthTwoPts = Math.sin(diffLat / 2) *
      Math.sin(diffLat / 2) +
      Math.cos(this.degreesToRadians(pt1.latitude)) *
      Math.cos(this.degreesToRadians(pt2.latitude)) *
      Math.sin(diffLon / 2) * Math.sin(diffLon / 2)
    ;
    const cAngularDistanceTwoPtsRadians = 2 *
      Math.atan2(
        Math.sqrt(aSquareHalfChordLengthTwoPts),
        Math.sqrt(1 - aSquareHalfChordLengthTwoPts)
      );

    // Distance in kilometres
    const distance = RRadiusOfEarthKm * cAngularDistanceTwoPtsRadians;
    console.log('​GeoUtilityService:: constructor() -> distance', distance);

    return distance;
  }
}
