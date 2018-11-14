import { Component, OnInit } from '@angular/core';

import { TrainingEvent } from '../../models/training-event';
import { MockTrainingEventApiService } from './../../services/mock-training-event-api.service';

@Component({
  selector: 'app-master-events-list-page',
  templateUrl: './master-events-list-page.component.html',
  styleUrls: ['./master-events-list-page.component.scss']
})
export class MasterEventsListPageComponent implements OnInit {

  constructor(public trainingEventApiService: MockTrainingEventApiService) {

  }

  ngOnInit() {
    const trainingEvents: TrainingEvent[] = this.trainingEventApiService
      .getMostRecentUpcomingEvents()
    ;
    console.log('​MasterEventsListPageComponent:: ngOnInit() -> trainingEvents', trainingEvents);

  }

}
