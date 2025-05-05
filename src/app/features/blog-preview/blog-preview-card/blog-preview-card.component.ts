import { UserInfoComponent } from '@/app/shared/ui/user-info/user-info.component';
import { getBgColorClass } from '@/app/tools/getColor';
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
    return getBgColorClass(article?.tag?.color?.color);
  }
}
