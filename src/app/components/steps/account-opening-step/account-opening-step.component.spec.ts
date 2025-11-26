import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOpeningStepComponent } from './account-opening-step.component';

describe('AccountOpeningStepComponent', () => {
  let component: AccountOpeningStepComponent;
  let fixture: ComponentFixture<AccountOpeningStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountOpeningStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountOpeningStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
