import { Component } from '@angular/core';
import { StepFooterComponent } from '../../../shared/step-footer/step-footer.component';
import { SupportCardComponent } from '../../../shared/support-card/support-card.component';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-spouse-details-step',
  imports: [StepFooterComponent, SupportCardComponent, CardModule],
  templateUrl: './spouse-details-step.component.html',
  styleUrl: './spouse-details-step.component.scss'
})
export class SpouseDetailsStepComponent {

}
