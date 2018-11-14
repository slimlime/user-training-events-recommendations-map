import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterEventsListPageComponent } from './master-events-list-page.component';

describe('MasterEventsListPageComponent', () => {
  let component: MasterEventsListPageComponent;
  let fixture: ComponentFixture<MasterEventsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterEventsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterEventsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
