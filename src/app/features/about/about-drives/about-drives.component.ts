import { Drives } from '@/app/types/about';
import { Component, Input } from '@angular/core';
import { DesktopH2Component } from '../../../shared/ui/text/desktop-h2/desktop-h2.component';
import { TextBodyComponent } from '../../../shared/ui/text/text-body/text-body.component';
import { NgFor } from '@angular/common';
import { AboutDrivesCardComponent } from './about-drives-card/about-drives-card.component';

@Component({
  selector: 'app-about-drives',
  imports: [
    DesktopH2Component,
    TextBodyComponent,
    NgFor,
    AboutDrivesCardComponent,
  ],
  templateUrl: './about-drives.component.html',
  styleUrl: './about-drives.component.css',
})
export class AboutDrivesComponent {
  @Input() drives!: Drives;
}
