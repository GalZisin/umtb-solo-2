import { Component, inject } from '@angular/core';
import { StepFooterComponent } from '../../../shared/step-footer/step-footer.component';
import { SupportCardComponent } from '../../../shared/support-card/support-card.component';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-spouse-details-step',
  imports: [StepFooterComponent, SupportCardComponent, CardModule, DropdownModule, ReactiveFormsModule],
  templateUrl: './spouse-details-step.component.html',
  styleUrl: './spouse-details-step.component.scss'
})
export class SpouseDetailsStepComponent {
  private fb = inject(FormBuilder);
  spouseDetailsForm: FormGroup;

  constructor() {
    this.spouseDetailsForm = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      idNumber: new FormControl(''),
      mobilePhone: new FormControl(''),
      email: new FormControl('')
    });
  }
  onSubmit() {

  }
}
