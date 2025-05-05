import { BlogHero } from '@/app/types/blog';
import { Component, Input } from '@angular/core';
import { DesktopH1Component } from '../../../shared/ui/text/desktop-h1/desktop-h1.component';
import { TextBodyComponent } from '../../../shared/ui/text/text-body/text-body.component';
import { getBgColorClass } from '@/app/tools/getColor';

@Component({
  selector: 'app-blog-hero',
  imports: [DesktopH1Component, TextBodyComponent],
  templateUrl: './blog-hero.component.html',
  styleUrl: './blog-hero.component.css',
})
export class BlogHeroComponent {
  @Input() hero!: BlogHero;

  getBgColor(color: string) {
    return getBgColorClass(color);
  }
}
