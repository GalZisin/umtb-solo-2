import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSubmissionStepComponent } from './loan-submission-step.component';

describe('LoanSubmissionStepComponent', () => {
  let component: LoanSubmissionStepComponent;
  let fixture: ComponentFixture<LoanSubmissionStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanSubmissionStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanSubmissionStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
