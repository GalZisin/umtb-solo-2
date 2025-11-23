import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-support-card',
  standalone: true,
  imports: [CardModule, ImageModule],
  templateUrl: './support-card.component.html',
  styleUrls: ['./support-card.component.scss']
})
export class SupportCardComponent {}