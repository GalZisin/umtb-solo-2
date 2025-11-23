import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { israeliIdValidator, mobilePhoneValidator, loanAmountValidator } from '../../validators/validators';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-loan-pre-application',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToolbarModule, ButtonModule, CardModule, ImageModule, SidebarModule, InputTextModule, DropdownModule, CheckboxModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './loan-pre-application.component.html',
  styleUrls: ['./loan-pre-application.component.scss']
})
export class LoanPreApplicationComponent {
  mobileSidebarVisible = false;
  customerDetails: FormGroup;
  minLoanAmount = 5000;
  maxLoanAmount = 500000;

  serviceTypes = [
    { label: 'הלוואה אישית', value: 'personal_loan' },
    { label: 'משכנתא', value: 'mortgage' },
    { label: 'ביטוח חיים', value: 'life_insurance' },
    { label: 'ביטוח רכב', value: 'car_insurance' },
    { label: 'ביטוח בריאות', value: 'health_insurance' },
    { label: 'השקעות בבורסה', value: 'stock_investments' },
    { label: 'השקעות בקרנות', value: 'mutual_funds' },
    { label: 'חסכון לפנסיה', value: 'pension_savings' },
    { label: 'פיקדון שקלי', value: 'shekel_deposit' },
    { label: 'פיקדון מט"ח', value: 'foreign_deposit' }
  ];

  constructor(private router: Router, private fb: FormBuilder) {
    this.customerDetails = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      idNumber: ['', [Validators.required, israeliIdValidator]],
      mobilePhone: ['', [Validators.required, mobilePhoneValidator]],
      email: ['', [Validators.required, Validators.email]],
      loanAmount: ['', [Validators.required, loanAmountValidator(this.minLoanAmount, this.maxLoanAmount)]],
      orderNumber: ['', Validators.required],
      serviceType: ['', Validators.required],
      marketingConsent: [false, Validators.requiredTrue]
    });
  }



  getFieldError(fieldName: string): string {
    const field = this.customerDetails.get(fieldName);
    if (field?.errors && field.touched) {
      if (fieldName === 'firstName' && field.errors['required']) return 'יש להזין שם פרטי';
      if (fieldName === 'lastName' && field.errors['required']) return 'יש להזין שם משפחה';
      if (fieldName === 'idNumber') {
        if (field.errors['required']) return 'יש להזין מספר תעודת זהות';
        if (field.errors['invalidId']) return 'מספר תעודת זהות לא תקין';
      }
      if (fieldName === 'mobilePhone') {
        if (field.errors['required']) return 'יש להזין מספר נייד';
        if (field.errors['invalidPhone']) return 'יש להזין מספר נייד תקין';
      }
      if (fieldName === 'email') {
        if (field.errors['required']) return 'יש להזין כתובת מייל';
        if (field.errors['email']) return 'יש להזין כתובת מייל תקינה';
      }
      if (fieldName === 'loanAmount') {
        if (field.errors['required']) return 'יש להזין סכום הלוואה';
        if (field.errors['invalidLoanAmount']) {
          const { min, max } = field.errors['invalidLoanAmount'];
          return `ניתן להקיש סכום בין ${min.toLocaleString()}- ${max.toLocaleString()} ₪`;
        }
      }
      if (fieldName === 'marketingConsent') {
        if (field.errors['required']) return 'יש לאשר קבלת מידע שיווקי';
      }
    }
    return '';
  }

  action1() {
    console.log('Action 1 clicked');
  }

  action2() {
    console.log('Action 2 clicked');
  }

  action3() {
    console.log('Action 3 clicked');
  }

  action4() {
    console.log('Action 4 clicked');
  }

  navigateToPrimeNG() {
    this.router.navigate(['/primeng-test']);
  }

  toggleMobileSidebar() {
    this.mobileSidebarVisible = !this.mobileSidebarVisible;
  }

  onSubmit() {
    if (this.customerDetails.valid) {
      console.log('Form submitted:', this.customerDetails.value);
    } else {
      this.customerDetails.markAllAsTouched();
    }
  }
}