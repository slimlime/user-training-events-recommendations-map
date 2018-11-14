import { Component, Input, OnInit } from '@angular/core';

import { TrainingEvent } from '../../models/training-event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  @Input() trainingEvent: TrainingEvent;
  constructor() { }

  ngOnInit() {

  }

}
