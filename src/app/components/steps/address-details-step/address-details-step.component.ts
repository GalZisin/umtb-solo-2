import { Component } from '@angular/core';
import { StepFooterComponent } from '../../../shared/step-footer/step-footer.component';
import { SupportCardComponent } from '../../../shared/support-card/support-card.component';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-address-details-step',
  imports: [StepFooterComponent, SupportCardComponent, CardModule],
  templateUrl: './address-details-step.component.html',
  styleUrl: './address-details-step.component.scss'
})
export class AddressDetailsStepComponent {

}
