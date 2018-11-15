import { TestBed, inject } from '@angular/core/testing';

import { GeoUtilityService } from './geo-utility.service';

describe('GeoUtilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoUtilityService]
    });
  });

  const pt1 = {
    latitude: -27.3,
    longitude: 153.22
  };
  const pt2 = {
    latitude: -27.32,
    longitude: 153.24
  };
  const precision = 2;

  it('should be created', inject([GeoUtilityService], (service: GeoUtilityService) => {
    expect(service).toBeTruthy();
  }));

  // Calculation utility functions
  it('should calculate 180 deg -> radians pi', inject([GeoUtilityService], (service: GeoUtilityService) => {
    expect(service.degreesToRadians(180)).toBeCloseTo(3.14159, precision);
  }));

  // Distance between spherical coordinates great circle arc.
  // Formatting differences
  it('should calculate distance ~2.97 km', inject(
    [GeoUtilityService], (service: GeoUtilityService) => { expect(
      service.getDistanceKilometresBetweenCoordinates(pt1, pt2)
    ).toBeCloseTo(
        2.974956444218144,
        precision
      );
    })
  );

});
