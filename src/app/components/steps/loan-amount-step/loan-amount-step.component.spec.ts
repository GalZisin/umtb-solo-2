import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAmountStepComponent } from './loan-amount-step.component';

describe('LoanAmountStepComponent', () => {
  let component: LoanAmountStepComponent;
  let fixture: ComponentFixture<LoanAmountStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanAmountStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanAmountStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
