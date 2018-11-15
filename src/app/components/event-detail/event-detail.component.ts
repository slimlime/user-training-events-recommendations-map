import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TrainingEvent } from '../../models/training-event';
import { MockTrainingEventApiService } from './../../services/mock-training-event-api.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  @Input() trainingEvent: TrainingEvent;
  constructor(
    public activatedRoute: ActivatedRoute,
    public trainingEventApiService: MockTrainingEventApiService
  ) {

  }

  ngOnInit() {
    const trainingEvent = this.getEventInformation(this.activatedRoute, this.trainingEventApiService);
    this.trainingEvent = trainingEvent;
  }

  /**
   *
   *
   * @param {ActivatedRoute} activatedRoute
   * @param {MockTrainingEventApiService} eventApi
   * @returns {TrainingEvent}
   * @memberof EventDetailComponent
   */
  getEventInformation(
    activatedRoute: ActivatedRoute,
    eventApi: MockTrainingEventApiService
  ): TrainingEvent {
    // Get parameter string id and convert to number.
    const eventIDParam = activatedRoute.snapshot.paramMap.get('id');
    const eventID: number = +eventIDParam;
    // Get event information for the given id.
    const trainingEvent = eventApi.getEventByID(+eventID);

    return trainingEvent;
  }
}
