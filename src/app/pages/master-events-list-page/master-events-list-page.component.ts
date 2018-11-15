import { Component, OnInit } from '@angular/core';

import { TrainingEvent } from '../../models/training-event';
import { LocationCoordinatePt } from './../../models/training-event';
import { GeolocationService } from './../../services/geolocation.service';
import { MockTrainingEventApiService } from './../../services/mock-training-event-api.service';

@Component({
  selector: 'app-master-events-list-page',
  templateUrl: './master-events-list-page.component.html',
  styleUrls: ['./master-events-list-page.component.scss']
})
export class MasterEventsListPageComponent implements OnInit {

  // Simpler to concrete the properties here. Could also pass full reactivity.
  upcomingTrainingEvents: TrainingEvent[] = [];
  cityLocation = 'Brisbane'; // default
  // Can encapsulate logic in service as needed.


  constructor(
    public trainingEventApiService: MockTrainingEventApiService,
    public geolocationService: GeolocationService
  ) {

  }

  ngOnInit() {

    // Get events to populate list.
    const upcomingEventsRecentAtCity = this.populateTrainingEventsInCity(this.cityLocation);

    this.upcomingTrainingEvents = upcomingEventsRecentAtCity;

  }


  /**
   * Gets training events for a city location name.
   *
   * @param {string} cityLocation
   * @returns
   * @memberof MasterEventsListPageComponent
   */
  populateTrainingEventsInCity(cityLocation: string): TrainingEvent[] {
    const upcomingSortedEventsAtCity = this.trainingEventApiService
      .getMostRecentUpcomingEventsNumSliceInCityLocation(cityLocation)
    ;
    console.log('​MasterEventsListPageComponent:: ngOnInit() -> upcomingSortedEventsAtBrisbane', upcomingSortedEventsAtCity);
    return upcomingSortedEventsAtCity;
  }

  // populateTrainingEventsNearUserLocation(userLocation: LocationCoordinatePt): TrainingEvent[] {


  // }
  /**
   * Get user location in response to user input.
   * On page load results in a [Violation]
   *
   * @memberof MasterEventsListPageComponent
   */
  getUserLocation(): LocationCoordinatePt {
    const userLocation = this.geolocationService.getUserLocation();
    console.log('​MasterEventsListPageComponent:: ngOnInit() -> userLocation', userLocation);
    return userLocation;
  }

  /**
   * User explicit check for events near user location.
   *
   * @memberof MasterEventsListPageComponent
   */
  checkForEvents() {
    this.getUserLocation();
    this.populateTrainingEventsInCity('Brisbane');
  }
}
