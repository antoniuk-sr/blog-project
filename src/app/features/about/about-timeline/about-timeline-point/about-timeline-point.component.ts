import { TimelinePoint } from '@/app/types/about';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-timeline-point',
  imports: [],
  templateUrl: './about-timeline-point.component.html',
  styleUrl: './about-timeline-point.component.css',
})
export class AboutTimelinePointComponent {
  @Input() point!: TimelinePoint;
}
