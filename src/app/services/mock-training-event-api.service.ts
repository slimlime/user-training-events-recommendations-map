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
   *
   * @memberof MockTrainingEventApiService
   */
  compareUpcomingEventSoonest() {

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
