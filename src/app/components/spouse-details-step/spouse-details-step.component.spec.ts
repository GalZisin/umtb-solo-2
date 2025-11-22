import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpouseDetailsStepComponent } from './spouse-details-step.component';

describe('SpouseDetailsStepComponent', () => {
  let component: SpouseDetailsStepComponent;
  let fixture: ComponentFixture<SpouseDetailsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpouseDetailsStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpouseDetailsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
