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
   * @param {number} [numEvents=5]
   * @returns {TrainingEvent[]}
   * @memberof MockTrainingEventApiService
   */
  getMostRecentEvents(numEvents: number = 5): TrainingEvent[] {
    const seedTestData = DATA_SEED_TRAINING_EVENTS;

    return seedTestData;
  }

  sortEventsDateTime() {
    // use Array.sort() with custom function
  }

  compareUpcomingEventSoonest() {

  }

  compareUpcomingEventLatest() {

  }

}
