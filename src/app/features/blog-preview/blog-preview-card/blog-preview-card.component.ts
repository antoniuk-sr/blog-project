import { UserInfoComponent } from '@/app/shared/ui/user-info/user-info.component';
import { Article } from '@/app/types/article';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-blog-preview-card',
  imports: [UserInfoComponent],
  templateUrl: './blog-preview-card.component.html',
  styleUrl: './blog-preview-card.component.css',
})
export class BlogPreviewCardComponent {
  @Input() article!: Article;

  getColor(article: Article): string {
    switch (article.tag.color.color) {
      case 'blue':
        return 'bg-[var(--blue)]';
      case 'red':
        return 'bg-[var(--red)]';
      case 'green':
        return 'bg-[var(--green)]';
      case 'black':
        return 'bg-[var(--black)]';
    }
    return 'bg-[var(--blue)]';
  }
}
