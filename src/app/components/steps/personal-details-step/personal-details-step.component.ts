import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { StepFooterComponent } from '../../../shared/step-footer/step-footer.component';
import { SupportCardComponent } from '../../../shared/support-card/support-card.component';
import { HeaderComponent } from '../../../shared/header/header.component';
import {
  israeliIdValidator,
  mobilePhoneValidator,
} from '../../../validators/validators';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormDataService } from '../../../services/form-data.service';

@Component({
  selector: 'app-personal-details-step',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StepFooterComponent,
    SupportCardComponent,
    HeaderComponent,
    CardModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    CheckboxModule,
    SelectButtonModule,
    MultiSelectModule
  ],
  templateUrl: './personal-details-step.component.html',
  styleUrl: './personal-details-step.component.scss',
})
export class PersonalDetailsStepComponent {
  personalForm: FormGroup;
  displayPublicPositionDescription: boolean = false;
  displayFamilyMemberPublicPositionDescription: boolean = false;
  displayAdditionalTaxResidencyCountries: boolean = false;

  genderOptions = [
    { label: 'זכר', value: 'male' },
    { label: 'נקבה', value: 'female' },
  ];

  maritalStatusOptions = [
    { label: 'רווק/ה', value: 'single' },
    { label: 'נשוי/אה', value: 'married' },
    { label: 'גרוש/ה', value: 'divorced' },
    { label: 'אלמן/ה', value: 'widowed' },
  ];

  biometricOptions = [
    { label: 'כן', value: true },
    { label: 'לא', value: false },
  ];

  yesNoOptions = [
    { label: 'כן', value: true },
    { label: 'לא', value: false },
  ];

  countries = [
    { label: 'סין', value: 'Chaina' },
    { label: 'אירן', value: 'Iran' },
  ];
  private fb = inject(FormBuilder);
  private formDataService = inject(FormDataService);

  constructor() {
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
      biometricId: [null, Validators.required],
      maritalStatus: ['', Validators.required],
      childrenCount: ['', Validators.required],
      bankingConsent: [false, Validators.requiredTrue],
      publicPosition: [null, Validators.required],
      publicPositionDescription: ['', Validators.maxLength(50)],
      familyMemberPublicPosition: [null, Validators.required],
      familyMemberPositionDescription: ['', Validators.maxLength(50)],
      noOtherBeneficiaries: ['', Validators.required],
      additionalTaxResidency: ['', Validators.required],
      countries: [[]],
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

  onPublicPositionChange(event: any) {
    if (event.value) {
      this.displayPublicPositionDescription = true;
      return;
    } else {
      this.displayPublicPositionDescription = false;
      return;
    }
  }

  onFamilyMemberPublicPositionChange(event: any) {
    if (event.value) {
      this.displayFamilyMemberPublicPositionDescription = true;
      return;
    } else {
      this.displayFamilyMemberPublicPositionDescription = false;
      return;
    }
  }

  onAdditionalTaxResidencyChange(event: any){
    if (event.value) {
      this.displayAdditionalTaxResidencyCountries = true;
      return;
    } else {
      this.displayAdditionalTaxResidencyCountries = false;
      return;
    }
  }

  onNextClick() {
    console.log('Form data when clicking לשלב הבא:', this.personalForm.value);
    this.formDataService.updateStepData('personalDetails', this.personalForm.value);
    console.log('All stored form data:', this.formDataService.getAllData());
  }

  onSubmit() {
    if (this.personalForm.valid) {
      this.formDataService.updateStepData('personalDetails', this.personalForm.value);
      console.log('Personal form submitted:', this.personalForm.value);
      console.log('All form data:', this.formDataService.getAllData());
    } else {
      this.personalForm.markAllAsTouched();
    }
  }
}
