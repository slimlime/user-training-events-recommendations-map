import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapViewPageComponent } from './map-view-page.component';
// Need mock-google maps
// declare let google: any;
require('src/app/mocks/google-maps-mock');

describe('MapViewPageComponent', () => {
  let component: MapViewPageComponent;
  let fixture: ComponentFixture<MapViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
