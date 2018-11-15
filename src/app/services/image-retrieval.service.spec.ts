import { TestBed, inject } from '@angular/core/testing';

import { ImageRetrievalService } from './image-retrieval.service';

describe('ImageRetrievalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageRetrievalService]
    });
  });

  it('should be created', inject([ImageRetrievalService], (service: ImageRetrievalService) => {
    expect(service).toBeTruthy();
  }));
});
