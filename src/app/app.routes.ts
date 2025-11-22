import { Routes } from '@angular/router';
import { PrimengTestComponent } from './components/primeng-test/primeng-test.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoanRequestProcessComponent } from './components/loan-request-process/loan-request-process.component';
import { PersonalDetailsStepComponent } from './components/steps/personal-details-step/personal-details-step.component';
import { SpouseDetailsStepComponent } from './components/steps/spouse-details-step/spouse-details-step.component';
import { AddressDetailsStepComponent } from './components/steps/address-details-step/address-details-step.component';
import { LoanAmountStepComponent } from './components/steps/loan-amount-step/loan-amount-step.component';
import { AccountOpeningStepComponent } from './components/steps/account-opening-step/account-opening-step.component';
import { LoanAccountDetailsStepComponent } from './components/steps/loan-account-details-step/loan-account-details-step.component';
import { SalaryDetailsStepComponent } from './components/steps/salary-details-step/salary-details-step.component';
import { LoanSubmissionStepComponent } from './components/steps/loan-submission-step/loan-submission-step.component';
import { ApprovedLoanDetailsComponent } from './components/steps/approved-loan-details/approved-loan-details.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'primeng-test', component: PrimengTestComponent },
  { path: 'loan-request', component: LoanRequestProcessComponent },
  { path: 'steps/personal-details', component: PersonalDetailsStepComponent },
  { path: 'steps/spouse-details', component: SpouseDetailsStepComponent },
  { path: 'steps/address-details', component: AddressDetailsStepComponent },
  { path: 'steps/loan-amount', component: LoanAmountStepComponent },
  { path: 'steps/account-opening', component: AccountOpeningStepComponent },
  { path: 'steps/loan-account-details', component: LoanAccountDetailsStepComponent },
  { path: 'steps/salary-details', component: SalaryDetailsStepComponent },
  { path: 'steps/loan-submission', component: LoanSubmissionStepComponent },
  { path: 'steps/approved-loan', component: ApprovedLoanDetailsComponent }
];
