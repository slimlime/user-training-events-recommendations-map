import { TrainingEvent } from './../../models/training-event';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { EventListItemComponent } from './event-list-item.component';

describe('EventListItemComponent', () => {
  let component: EventListItemComponent;
  let fixture: ComponentFixture<EventListItemComponent>;
  const mockTrainingEvent: TrainingEvent = {
    id: 1,
    title: 'Event Title A',
    dateTime: '2019-01-15T18:38:52.483Z',
    imageUrl: 'http://via.placeholder.com/100x100',
    availableSeats: 128,
    locationCityName: 'Brisbane',
    locationCoordinates: [-27.4697707, 153.025123],
    description: 'description text'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListItemComponent ],
      providers: [
        {
          provide: Router, useValue: { }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListItemComponent);
    component = fixture.componentInstance;
    component.trainingEvent = mockTrainingEvent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
