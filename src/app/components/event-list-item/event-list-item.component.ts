import { Component, Input, OnInit } from '@angular/core';

import { TrainingEvent } from './../../models/training-event';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.scss']
})
export class EventListItemComponent implements OnInit {
  @Input() trainingEvent: TrainingEvent;
  constructor() { }

  ngOnInit() {
  }

}
