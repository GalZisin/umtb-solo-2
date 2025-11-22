import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-step-footer',
  imports: [ButtonModule],
  templateUrl: './step-footer.component.html',
  styleUrl: './step-footer.component.scss'
})
export class StepFooterComponent {
  @Input() currentStep: number = 0;
  @Input() disablePrevious: boolean = false;
  @Input() disableNext: boolean = false;
  @Output() previousClick = new EventEmitter<void>();
  @Output() nextClick = new EventEmitter<void>();

  private stepRoutes = [
    '/steps/personal-details',
    '/steps/spouse-details',
    '/steps/address-details',
    '/steps/loan-amount',
    '/steps/account-opening',
    '/steps/loan-account-details',
    '/steps/salary-details',
    '/steps/loan-submission',
    '/steps/approved-loan'
  ];

  constructor(private router: Router) {}

  onPreviousClick() {
    if (this.currentStep > 0) {
      this.router.navigate([this.stepRoutes[this.currentStep - 1]]);
    }
    this.previousClick.emit();
  }

  onNextClick() {
    if (this.currentStep < this.stepRoutes.length - 1) {
      this.router.navigate([this.stepRoutes[this.currentStep + 1]]);
    }
    this.nextClick.emit();
  }
}
