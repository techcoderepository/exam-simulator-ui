import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleexamdetailComponent } from './scheduleexamdetail.component';

describe('ScheduleexamdetailComponent', () => {
  let component: ScheduleexamdetailComponent;
  let fixture: ComponentFixture<ScheduleexamdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleexamdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleexamdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
