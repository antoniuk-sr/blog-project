import { FeedbackCard } from '@/app/types/feedback';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-card',
  imports: [],
  templateUrl: './feedback-card.component.html',
  styleUrl: './feedback-card.component.css',
})
export class FeedbackCardComponent {
  @Input() card!: FeedbackCard;
}
