import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepFooterComponent } from '../../../shared/step-footer/step-footer.component';
import { SupportCardComponent } from '../../../shared/support-card/support-card.component';
import { israeliIdValidator, mobilePhoneValidator } from '../../../validators/validators';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-personal-details-step',
  imports: [CommonModule, ReactiveFormsModule, StepFooterComponent, SupportCardComponent, CardModule, InputTextModule, DropdownModule, CalendarModule, CheckboxModule],
  templateUrl: './personal-details-step.component.html',
  styleUrl: './personal-details-step.component.scss'
})
export class PersonalDetailsStepComponent {
  personalForm: FormGroup;

  genderOptions = [
    { label: 'זכר', value: 'male' },
    { label: 'נקבה', value: 'female' }
  ];

  maritalStatusOptions = [
    { label: 'רווק/ה', value: 'single' },
    { label: 'נשוי/אה', value: 'married' },
    { label: 'גרוש/ה', value: 'divorced' },
    { label: 'אלמן/ה', value: 'widowed' }
  ];

  biometricOptions = [
    { label: 'כן', value: true },
    { label: 'לא', value: false }
  ];

  constructor(private fb: FormBuilder) {
    this.personalForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      idNumber: ['', [Validators.required, israeliIdValidator]],
      mobilePhone: ['', [Validators.required, mobilePhoneValidator]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
      idIssueDate: ['', Validators.required],
      idExpiryDate: ['', Validators.required],
      biometricId: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      childrenCount: ['', Validators.required],
      bankingConsent: [false, Validators.requiredTrue]
    });
  }

  // getFieldError(fieldName: string): string {
  //   const field = this.personalForm.get(fieldName);
  //   if (field?.errors && field.touched) {
  //     if (field.errors['required']) {
  //       switch (fieldName) {
  //         case 'firstName': return 'יש להזין שם פרטי';
  //         case 'lastName': return 'יש להזין שם משפחה';
  //         case 'idNumber': return 'יש להזין מספר תעודת זהות';
  //         case 'mobilePhone': return 'יש להזין מספר נייד';
  //         case 'email': return 'יש להזין כתובת מייל';
  //         case 'gender': return 'יש לבחור מין';
  //         case 'birthDate': return 'יש להזין תאריך לידה';
  //         case 'idIssueDate': return 'יש להזין תאריך הנפקת ת"ז';
  //         case 'idExpiryDate': return 'יש להזין תאריך תום תוקף ת"ז';
  //         case 'biometricId': return 'יש לבחור ת"ז ביומטרי';
  //         case 'maritalStatus': return 'יש לבחור מצב משפחתי';
  //         case 'childrenCount': return 'יש להזין מספר ילדים';
  //         case 'bankingConsent': return 'יש לאשר בדיקות תקינות';
  //       }
  //     }
  //     if (fieldName === 'idNumber' && field.errors['invalidId']) return 'מספר תעודת זהות לא תקין';
  //     if (fieldName === 'mobilePhone' && field.errors['invalidPhone']) return 'יש להזין מספר נייד תקין';
  //     if (fieldName === 'email' && field.errors['email']) return 'יש להזין כתובת מייל תקינה';
  //   }
  //   return '';
  // }

  onSubmit() {
    if (this.personalForm.valid) {
      console.log('Personal form submitted:', this.personalForm.value);
    } else {
      this.personalForm.markAllAsTouched();
    }
  }
}
