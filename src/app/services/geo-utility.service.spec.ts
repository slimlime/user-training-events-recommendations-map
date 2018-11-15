import { TestBed, inject } from '@angular/core/testing';

import { GeoUtilityService } from './geo-utility.service';

describe('GeoUtilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoUtilityService]
    });
  });

  it('should be created', inject([GeoUtilityService], (service: GeoUtilityService) => {
    expect(service).toBeTruthy();
  }));
});
