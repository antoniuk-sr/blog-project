import { OurTeam } from '@/app/types/about';
import { Component, Input } from '@angular/core';
import { DesktopH2Component } from '../../../shared/ui/text/desktop-h2/desktop-h2.component';
import { TextBodyComponent } from '@/app/shared/ui/text/text-body/text-body.component';
import { NgFor } from '@angular/common';
import { AboutTeamCardComponent } from './about-team-card/about-team-card.component';

@Component({
  selector: 'app-about-team',
  imports: [
    DesktopH2Component,
    TextBodyComponent,
    NgFor,
    AboutTeamCardComponent,
  ],
  templateUrl: './about-team.component.html',
  styleUrl: './about-team.component.css',
})
export class AboutTeamComponent {
  @Input() team!: OurTeam;
}
