import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDetailsStepComponent } from './address-details-step.component';

describe('AddressDetailsStepComponent', () => {
  let component: AddressDetailsStepComponent;
  let fixture: ComponentFixture<AddressDetailsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressDetailsStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressDetailsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
