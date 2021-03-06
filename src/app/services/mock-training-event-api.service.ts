import { Injectable } from '@angular/core';

import { TrainingEvent, LocationCoordinatePt } from './../models/training-event';
import { DATA_SEED_TRAINING_EVENTS } from './../seed/seed-training-events';
import { GeoUtilityService } from './geo-utility.service';

@Injectable({
  providedIn: 'root'
})
export class MockTrainingEventApiService {

  constructor(public geoUtilityService: GeoUtilityService) {

  }

  // - TODO: Add asynchronous reactivity e.g. Promise Observable to mock delay in network requests.


  /**
   * Get a specific event searched by ID.
   * -- TODO: Temp function. Can separate training event service from API. Caching
   * @param {number} id
   * @returns {TrainingEvent}
   * @memberof MockTrainingEventApiService
   */
  getEventByID(id: number): TrainingEvent {
    const seedTestData = DATA_SEED_TRAINING_EVENTS;
    const foundTrainingEvent = seedTestData.find( trainingEvent => {
      const trainingIDFound: boolean = trainingEvent.id === id;
      return trainingIDFound;
    });

    return foundTrainingEvent;
  }

  /**
   * Default five events
   *
   * @param {number} [numEvents=5] // Unused as need to process whole mock data in app.\
   * API would ideally sort before retrieving the results.
   * Otherwise have to SELECT the whole table just for application usage
   *
   * @returns {TrainingEvent[]}
   * @memberof MockTrainingEventApiService
   */
  getEvents(numEvents: number = 5): TrainingEvent[] {
    const seedTestData = DATA_SEED_TRAINING_EVENTS;

    return seedTestData;
  }

  /**
   * Default next five 'upcoming' events in order from soonest to latest.
   * Could make more generic.
   *
   * @param {number} [numEventsWanted=5] Default value five upcoming events to retrieve/select.
   * @returns {TrainingEvent[]}
   * @memberof MockTrainingEventApiService
   */
  getMostRecentUpcomingEvents(numEventsWanted: number = 5): TrainingEvent[] {
    const events = this.getEvents(numEventsWanted);

    const mostRecentEvents = this.sortEventsDateTimeSoonest(events);
    console.log('​MockTrainingEventApiService:: constructor() -> mostRecentEvents full list', mostRecentEvents);

    // Get the specified number of events after sorting. E.g. Next five events.
    // First five events slice 0..5 or undefined,5 for optional parameter.
    const mostRecentEventsNextNumSlice = mostRecentEvents.slice(undefined, numEventsWanted);
    console.log('​MockTrainingEventApiService:: constructor() -> mostRecentEventsNextSlice', mostRecentEventsNextNumSlice);

    return mostRecentEventsNextNumSlice;
  }

  /**
   * Get events at the user's current location city to fulfil requirement:
   * *Display events based on user's location.*
   *
   * @param {string} locationCityName
   * @param {number} [numEventsWanted=5]
   * @returns {TrainingEvent[]}
   * @memberof MockTrainingEventApiService
   */
  getMostRecentUpcomingEventsNumSliceInCityLocation(
    locationCityName: string,
    numEventsWanted: number = 5
  ): TrainingEvent[] {
    const events = this.getEvents();

    // Get events for a specific city.
    const cityEvents = events.filter((trainingEvent: TrainingEvent) => {
      const eventIsAtCity = this.eventFilterHasCity(trainingEvent, locationCityName);
      return eventIsAtCity;
    });

    const mostRecentUpcomingCityEvents = this.sortEventsDateTimeSoonest(cityEvents);

    const mostRecentUpcomingCityEventsNumSlice = mostRecentUpcomingCityEvents
      .slice(undefined, numEventsWanted)
    ;


    return mostRecentUpcomingCityEventsNumSlice;
  }

  /**
   * Get most recent upcoming events closest to coordinates
   * e.g. Pass user location to get most relevant results.
   *
   * @param {LocationCoordinatePt} coordinates
   * @param {number} [numEventsWanted=5]
   * @returns {TrainingEvent[]}
   * @memberof MockTrainingEventApiService
   */
  getMostRecentUpcomingEventsClosestToCoordinates(
    coordinates: LocationCoordinatePt,
    numEventsWanted: number = 5)
  : TrainingEvent[] {
    // Maybe better to use map bounds?
    // 1. Get the geographically closest training events

    // 2. Sort by recent upcoming soonest order.

    // Return num events e.g. 5 results

    return ;
  }
  /**
   * Utility function for filtering events array
   *
   * @param {TrainingEvent} trainingEvent
   * @param {string} givenLocationCityName
   * @returns
   * @memberof MockTrainingEventApiService
   */
  eventFilterHasCity(
    trainingEvent: TrainingEvent,
    givenLocationCityName: string
  ) {
    const trainingEventCityName = trainingEvent.locationCityName;
    const sameCityNameFound = trainingEventCityName === givenLocationCityName;

    return sameCityNameFound;
  }

  /**
   *
   * @example "2019-08-04T00:30:39.038Z" "2019-02-02T03:47:07.045Z"
   * @param {TrainingEvent[]} events
   * @memberof MockTrainingEventApiService
   */
  sortEventsDateTimeSoonest(events: TrainingEvent[]): TrainingEvent[] {
    // use Array.sort() with custom function
    // ISO 8601 can be sorted lexicographically. Or use Date
    const trainingEvents = events;

    const trainingEventsSortedSoonest = trainingEvents.sort(
      (firstGivenEvent, secondComparisonEvent) => {
        // If a < b returns -ve or -1, a is the `soonest` upcoming event.
        const comparisonSoonest: number = this.compareUpcomingEventSoonest(
          firstGivenEvent,
          secondComparisonEvent
        );
        return comparisonSoonest;
      }
    );

    return trainingEventsSortedSoonest;
   }

    /**
   * Comparison function to get the future event that is happening soonest.
   * The future dates that have least values are closest to the current date.
   * Assumed.
   * For Array.sort();
   * @memberof MockTrainingEventApiService
   */
  compareUpcomingEventSoonest(
    givenEvent: TrainingEvent,
    comparisonEvent: TrainingEvent
  ): number {
    // Comparing the given event DateTime to the other event for comparison

    const soonestFutureComparison = this.compareDateSoonest(
      givenEvent.dateTime,
      comparisonEvent.dateTime
    );

    // If first givenDate is equal to comparisonDate return 0;
    // If first givenDate is smaller, -1 or the negative difference.
    // If first givenDate is larger, +1 (can just use the difference if arith)

    // doesn't matter whether -1 or 0. unless possible recursion?

    return soonestFutureComparison;
  }


  /**
   * Comparison function to get the future event that is happening soonest.
   * The future dates that have least values are closest to the current date.
   * Assumed.
   * Could make this more generic.
   *
   * For Array.sort();
   * @memberof MockTrainingEventApiService
   */
  compareDateSoonest(givenDate: string, comparisonDate: string): number {

    // Comparing the givenDate to the other comparisonDate
    // If first givenDate is equal to comparisonDate return 0;
    // If first givenDate is smaller, -1 or the negative difference.
    // If first givenDate is larger, +1 (can just use the difference if arith)
    const givenDateIsSooner = givenDate < comparisonDate;

    // doesn't matter whether -1 or 0. unless possible recursion?

    return givenDateIsSooner ? -1 : 1;
  }


  /**
   * Comparison that gets the future event that is most distant from now.
   * The future dates with larger values are further away from current date.
   *
   * @memberof MockTrainingEventApiService
   */
  compareUpcomingEventLatest() {

  }

}
