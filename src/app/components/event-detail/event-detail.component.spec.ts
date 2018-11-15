import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';

import { MockTrainingEventApiService } from '../../services/mock-training-event-api.service';
import { EventDetailComponent } from './event-detail.component';

describe('EventDetailComponent', () => {
  let component: EventDetailComponent;
  let fixture: ComponentFixture<EventDetailComponent>;
  // const mockActivatedRoute = {
  //   snapshot: {
  //     data: {  },
  //     paramMap: {  },
  //     params: of({id: 1}),
  //     url: 'event'
  //   }
  // } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({id: 123}),
            paramMap: of({ get: (id) => '1'}),
            snapshot: {
              paramMap: { get: (id) => '1'}
            }
          }
        },
        MockTrainingEventApiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
