import { Routes } from '@angular/router';
import { PrimengTestComponent } from './components/primeng-test/primeng-test.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'primeng-test', component: PrimengTestComponent },
  { path: 'about', component: LandingPageComponent }, // Placeholder - create AboutComponent later
  { path: 'contact', component: LandingPageComponent } // Placeholder - create ContactComponent later
];
