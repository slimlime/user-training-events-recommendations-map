import { Component, OnInit } from '@angular/core';

import { TrainingEvent } from '../../models/training-event';
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
    const upcomingEventsRecentAtCity = this.populateTrainingEvents(this.cityLocation);

    this.upcomingTrainingEvents = upcomingEventsRecentAtCity;

  }

  testTrainingEventsUnsortedMockData() {
    const trainingEvents: TrainingEvent[] = this.trainingEventApiService
      .getMostRecentUpcomingEvents()
      ;
    console.log('​MasterEventsListPageComponent:: ngOnInit() -> trainingEvents', trainingEvents);
  }
  /**
   * Gets training events for a location
   *
   * @param {string} cityLocation
   * @returns
   * @memberof MasterEventsListPageComponent
   */
  populateTrainingEvents(cityLocation: string) {
    const upcomingSortedEventsAtCity = this.trainingEventApiService
      .getMostRecentUpcomingEventsNumSliceInCityLocation(cityLocation)
    ;
    console.log('​MasterEventsListPageComponent:: ngOnInit() -> upcomingSortedEventsAtBrisbane', upcomingSortedEventsAtCity);
    return upcomingSortedEventsAtCity;
  }
}
