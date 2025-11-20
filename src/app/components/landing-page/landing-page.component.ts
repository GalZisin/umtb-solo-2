import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ReactiveFormsModule, ToolbarModule, ButtonModule, CardModule, ImageModule, SidebarModule, InputTextModule, DropdownModule, CheckboxModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  mobileSidebarVisible = false;
  customerDetails: FormGroup;
  
  serviceTypes = [
    { label: 'הלוואה אישית', value: 'personal_loan' },
    { label: 'משכנתא', value: 'mortgage' },
    { label: 'ביטוח', value: 'insurance' },
    { label: 'השקעות', value: 'investments' }
  ];

  constructor(private router: Router, private fb: FormBuilder) {
    this.customerDetails = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      idNumber: ['', Validators.required],
      mobilePhone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      loanAmount: ['', Validators.required],
      orderNumber: ['', Validators.required],
      serviceType: ['', Validators.required],
      marketingConsent: [false]
    });
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
      console.log('Form is invalid');
    }
  }
}