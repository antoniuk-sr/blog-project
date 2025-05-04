import { Timeline } from '@/app/types/about';
import { Component, Input } from '@angular/core';
import { DesktopH2Component } from '../../../shared/ui/text/desktop-h2/desktop-h2.component';
import { TextBodyComponent } from '../../../shared/ui/text/text-body/text-body.component';
import { AboutTimelinePointComponent } from './about-timeline-point/about-timeline-point.component';
import { AboutComponent } from '../../../pages/about/about.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about-timeline',
  imports: [
    DesktopH2Component,
    TextBodyComponent,
    AboutTimelinePointComponent,
    NgFor,
  ],
  templateUrl: './about-timeline.component.html',
  styleUrl: './about-timeline.component.css',
})
export class AboutTimelineComponent {
  @Input() timeline!: Timeline;
}
