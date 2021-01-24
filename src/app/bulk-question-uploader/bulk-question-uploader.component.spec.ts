import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkQuestionUploaderComponent } from './bulk-question-uploader.component';

describe('BulkQuestionUploaderComponent', () => {
  let component: BulkQuestionUploaderComponent;
  let fixture: ComponentFixture<BulkQuestionUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkQuestionUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkQuestionUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
