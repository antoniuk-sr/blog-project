import { OurTeamCard } from '@/app/types/about';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-about-team-card',
  imports: [],
  templateUrl: './about-team-card.component.html',
  styleUrl: './about-team-card.component.css',
})
export class AboutTeamCardComponent implements OnChanges {
  @Input() card!: OurTeamCard;

  ngOnChanges(changes: SimpleChanges): void {}
}
