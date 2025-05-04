import { UserInfoComponent } from '@/app/shared/ui/user-info/user-info.component';
import { FeedbackCard } from '@/app/types/feedback';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-card',
  imports: [UserInfoComponent],
  templateUrl: './feedback-card.component.html',
  styleUrl: './feedback-card.component.css',
})
export class FeedbackCardComponent {
  @Input() card!: FeedbackCard;
}
