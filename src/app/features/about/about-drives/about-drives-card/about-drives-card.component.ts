import { DrivesCard } from '@/app/types/about';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-drives-card',
  imports: [],
  templateUrl: './about-drives-card.component.html',
  styleUrl: './about-drives-card.component.css',
})
export class AboutDrivesCardComponent {
  @Input() card!: DrivesCard;
}
