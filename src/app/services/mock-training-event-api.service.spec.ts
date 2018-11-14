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
});
