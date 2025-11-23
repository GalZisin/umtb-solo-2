import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { MobileFooterComponent } from '../../shared/mobile-footer/mobile-footer.component';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { SupportCardComponent } from '../../shared/support-card/support-card.component';

@Component({
  selector: 'app-loan-request-process',
  imports: [HeaderComponent, MobileFooterComponent, CardModule, ImageModule, ButtonModule, SupportCardComponent],
  templateUrl: './loan-request-process.component.html',
  styleUrl: './loan-request-process.component.scss'
})
export class LoanRequestProcessComponent {
  constructor(private router: Router) { }

  onStartClick() {
    this.router.navigate(['/steps/personal-details']);
  }
}
