import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { MobileFooterComponent } from '../../shared/mobile-footer/mobile-footer.component';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-loan-request-process',
  imports: [HeaderComponent, MobileFooterComponent, CardModule, ImageModule, ButtonModule],
  templateUrl: './loan-request-process.component.html',
  styleUrl: './loan-request-process.component.scss'
})
export class LoanRequestProcessComponent {
  onStartClick() {
    console.log('Start button clicked');
  }
}
