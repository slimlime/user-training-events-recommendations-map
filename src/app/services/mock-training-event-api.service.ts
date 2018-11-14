import { Injectable } from '@angular/core';

import { TrainingEvent } from './../models/training-event';
import { DATA_SEED_TRAINING_EVENTS } from './../seed/seed-training-events';

@Injectable({
  providedIn: 'root'
})
export class MockTrainingEventApiService {

  constructor() { }


  /**
   * Default five events
   *
   * @param {number} [numEvents=5]
   * @returns {TrainingEvent[]}
   * @memberof MockTrainingEventApiService
   */
  getEvents(numEvents: number = 5): TrainingEvent[] {
    const seedTestData = DATA_SEED_TRAINING_EVENTS;

    return seedTestData;
  }

  /**
   * Default next five 'upcoming' events in order from soonest to latest.
   *
   * @param {number} [numEvents=5] Default value five upcoming events.
   * @returns {TrainingEvent[]}
   * @memberof MockTrainingEventApiService
   */
  getMostRecentEvents(numEvents: number = 5): TrainingEvent[] {
    const seedTestData = DATA_SEED_TRAINING_EVENTS;

    return seedTestData;
  }


  /**
   *
   * @example "2019-08-04T00:30:39.038Z" "2019-02-02T03:47:07.045Z"
   * @param {TrainingEvent[]} events
   * @memberof MockTrainingEventApiService
   */
  sortEventsDateTime(events: TrainingEvent[]) {
    // use Array.sort() with custom function
    // ISO 8601 can be sorted lexicographically. Or use Date

  }


  /**
   * Comparison function to get the future event that is happening soonest.
   * The future dates that have least values are closest to the current date.
   * Assumed.
   * For Array.sort();
   * @memberof MockTrainingEventApiService
   */
  compareUpcomingEventSoonest(givenDate: string, comparisonDate: string): number {
    // Comparing the givenDate to the other comparisonDate
    // If first givenDate is equal to comparisonDate return 0;
    // If first givenDate is smaller, -1 or the negative difference.
    // If first givenDate is larger, +1 (can just use the difference if arith)
    const givenDateIsSooner = givenDate < comparisonDate;
    console.log('​MockTrainingEventApiService:: compareUpcomingEventSoonest() -> dateDifference', dateDifference);

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
