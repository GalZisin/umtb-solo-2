import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-custom-stepper',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.scss']
})
export class CustomStepperComponent {
  currentStep = 0;
  steps = [
    { label: 'Personal Info', completed: false },
    { label: 'Address', completed: false },
    { label: 'Payment', completed: false },
    { label: 'Confirmation', completed: false }
  ];

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.steps[this.currentStep].completed = true;
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  goToStep(index: number) {
    this.currentStep = index;
  }
}