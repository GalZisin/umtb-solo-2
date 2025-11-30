import { Component, inject, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
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
import { Calendar, CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormDataService } from '../../../services/form-data.service';
import '../../../utils/prime-safe-calendar.patch';
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
  // schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './personal-details-step.component.html',
  styleUrl: './personal-details-step.component.scss',
})
export class PersonalDetailsStepComponent implements OnInit {
  personalForm: FormGroup;
  displayPublicPositionDescription: boolean = false;
  displayFamilyMemberPublicPositionDescription: boolean = false;
  displayAdditionalTaxResidencyCountries: boolean = false;
  today!: Date;
  maxAllowedDate!: Date;
  rawBirthInput: string = '';
  lastTypedText: string = ''
  // tempInput: string = '';
  get birthDate() {
    return this.personalForm.get('birthDate');
  }

  rawInput: string = '';
  viewMode: 'date' | 'month' | 'year' = 'date';
  dateFormat: string = 'dd/mm/yy';

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

  ngOnInit() {
    this.setMaxAllowedDate();
  }

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

  onAdditionalTaxResidencyChange(event: any) {
    if (event.value) {
      this.displayAdditionalTaxResidencyCountries = true;
      return;
    } else {
      this.displayAdditionalTaxResidencyCountries = false;
      return;
    }
  }

  onBlur(calendar: any) {
    const input = this.rawInput.trim();
    if (!input) return;

    // YEAR ONLY yyyy
    if (/^\d{4}$/.test(input)) {
      const year = +input;
      const date = new Date(year, 0, 1);
      if (!this.isPast(date)) return this.rejectDate(calendar);
      this.setYearMode(date, input, calendar);
      return;
    }

    // MONTH-YEAR mm/yyyy
    if (/^\d{2}\/\d{4}$/.test(input)) {
      const [mm, yyyy] = input.split('/');
      const date = new Date(+yyyy, +mm - 1, 1);
      if (!this.isPast(date)) return this.rejectDate(calendar);
      this.setMonthYearMode(date, input, calendar);
      return;
    }

    // FULL DATE dd/mm/yyyy
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(input)) {
      const [dd, mm, yyyy] = input.split('/');
      const date = new Date(+yyyy, +mm - 1, +dd);
      if (!this.isPast(date)) return this.rejectDate(calendar);
      this.setFullDateMode(date, input, calendar);
      return;
    }

    this.rejectDate(calendar);
  }



  // onTyping(event: any) {
  //   const text = event.target.value;
  //   this.lastTypedText = text;

  //   // Parse only if valid
  //   const parts = text.split('/');

  //   // yyyy only
  //   if (parts.length === 1 && parts[0].length === 4) {
  //     const yyyy = +parts[0];
  //     this.birthDate?.setValue(new Date(yyyy, 0, 1));
  //     return;
  //   }

  //   // mm/yyyy
  //   if (parts.length === 2) {
  //     const mm = +parts[0];
  //     const yyyy = +parts[1];
  //     if (mm >= 1 && mm <= 12 && yyyy >= 1900) {
  //       this.birthDate?.setValue(new Date(yyyy, mm - 1, 1));
  //     }
  //     return;
  //   }

  //   // dd/mm/yyyy
  //   if (parts.length === 3) {
  //     const dd = +parts[0];
  //     const mm = +parts[1];
  //     const yyyy = +parts[2];
  //     this.birthDate?.setValue(new Date(yyyy, mm - 1, dd));
  //   }
  // }


  onUserTyping(event: any) {

    this.rawInput = event.target.value;  // store exact text
    console.log('onUserTyping Raw input:', this.rawInput)
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

  /* ----------------------------------------
       Helper: only allow past dates
  ---------------------------------------- */

  private isPast(date: Date): boolean {
    const now = new Date();
    return date.getTime() <= now.getTime();
  }

  /* ----------------------------------------
       What to do when date is in the future
  ---------------------------------------- */


  private rejectDate(cal: any) {
    const ctrl = this.personalForm.get('birthDate');
    ctrl?.setErrors({ invalidDate: true });
    ctrl?.setValue(null);
    cal.inputFieldValue = this.rawInput; // keep original text
  }

  /* -------------------------
     Mode Handlers
  -------------------------- */
  private setYearMode(date: Date, text: string, cal: Calendar) {
    this.viewMode = 'year';
    this.dateFormat = 'yy';

    // this.personalForm.get('birthDate')?.setValue(date);
    cal.inputFieldValue = text;
    cal.updateInputfield();   // <-- FORCE original text
  }

  private setMonthYearMode(date: Date, text: string, cal: Calendar) {
    console.log("text: ", text)
    this.viewMode = 'month';
    this.dateFormat = 'mm/yy';
    console.log("date: ", date)
    if (cal) cal.inputFieldValue = text; // KEEP raw input
    // this.personalForm.get('birthDate')?.setValue(date);
    cal.inputFieldValue = text;   // <-- restore "12/1986"
    cal.updateInputfield();
  }

  private setFullDateMode(date: Date, text: string, cal: Calendar) {
    this.viewMode = 'date';
    this.dateFormat = 'dd/mm/yy';
    // this.personalForm.get('birthDate')?.setValue(date);
    cal.inputFieldValue = text;   // <-- restore "25/11/1986"
    cal.updateInputfield();
  }

  private setMaxAllowedDate() {
    // Create "today" at midnight
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    this.today = now;

    // Yesterday (strictly before today)
    this.maxAllowedDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 1
    );
  }

  // Reject invalid/future date
  private rejectBirth() {
    this.personalForm.get('birthDate')?.setErrors({ invalidDate: true });
    this.personalForm.get('birthDate')?.setValue(null);
  }
}

