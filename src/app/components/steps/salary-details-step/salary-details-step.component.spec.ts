import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDetailsStepComponent } from './salary-details-step.component';

describe('SalaryDetailsStepComponent', () => {
  let component: SalaryDetailsStepComponent;
  let fixture: ComponentFixture<SalaryDetailsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryDetailsStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryDetailsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
