import { TestBed, inject } from '@angular/core/testing';

import { MockTrainingEventApiService } from './mock-training-event-api.service';

describe('MockTrainingEventApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockTrainingEventApiService]
    });
  });

  it('should be created', inject([MockTrainingEventApiService], (service: MockTrainingEventApiService) => {
    expect(service).toBeTruthy();
  }));

  it(
    'should retrieve id 1 Training Event with title: "Event Title A"',
    inject(
      [MockTrainingEventApiService],
      (service: MockTrainingEventApiService) => {
        expect(service.getEventByID(1).title).toBe('Event Title A');
      })
  );
});
