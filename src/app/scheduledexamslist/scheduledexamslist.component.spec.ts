import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledexamslistComponent } from './scheduledexamslist.component';

describe('ScheduledexamslistComponent', () => {
  let component: ScheduledexamslistComponent;
  let fixture: ComponentFixture<ScheduledexamslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledexamslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledexamslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
