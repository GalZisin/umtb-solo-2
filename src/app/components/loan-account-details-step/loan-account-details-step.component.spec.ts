import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAccountDetailsStepComponent } from './loan-account-details-step.component';

describe('LoanAccountDetailsStepComponent', () => {
  let component: LoanAccountDetailsStepComponent;
  let fixture: ComponentFixture<LoanAccountDetailsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanAccountDetailsStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanAccountDetailsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
