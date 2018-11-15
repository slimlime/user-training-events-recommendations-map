import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TrainingEvent } from './../../models/training-event';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.scss']
})
export class EventListItemComponent implements OnInit {
  @Input() trainingEvent: TrainingEvent;
  constructor( public router: Router) {

  }

  ngOnInit() {
  }

  navigateToEventDetail(router: Router, trainingEvent: TrainingEvent) {
    router.navigate(['events/details', trainingEvent.id]);
  }
}
