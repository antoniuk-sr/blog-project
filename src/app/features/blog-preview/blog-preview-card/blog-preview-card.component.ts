import { UserInfoComponent } from '@/app/shared/ui/user-info/user-info.component';
import { Article } from '@/app/types/article';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-blog-preview-card',
  imports: [UserInfoComponent],
  templateUrl: './blog-preview-card.component.html',
  styleUrl: './blog-preview-card.component.css',
})
export class BlogPreviewCardComponent implements OnChanges {
  @Input() article!: Article;

  ngOnChanges(): void {
    console.log(this.article);
  }
}
