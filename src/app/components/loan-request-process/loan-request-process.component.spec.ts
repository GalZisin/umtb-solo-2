import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRequestProcessComponent } from './loan-request-process.component';

describe('LoanRequestProcessComponent', () => {
  let component: LoanRequestProcessComponent;
  let fixture: ComponentFixture<LoanRequestProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanRequestProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanRequestProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
