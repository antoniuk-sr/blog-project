import { AboutHero } from '@/app/types/about';
import { Component, Input } from '@angular/core';
import { DesktopH1Component } from '../../../shared/ui/text/desktop-h1/desktop-h1.component';
import { TextBodyComponent } from '../../../shared/ui/text/text-body/text-body.component';

@Component({
  selector: 'app-about-hero',
  imports: [DesktopH1Component, TextBodyComponent],
  templateUrl: './about-hero.component.html',
  styleUrl: './about-hero.component.css',
})
export class AboutHeroComponent {
  @Input() hero!: AboutHero;
}
