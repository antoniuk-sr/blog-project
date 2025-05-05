import { TextBody2Component } from '@/app/shared/ui/text/text-body2/text-body2.component';
import { ArticleCategory } from '@/app/types/article';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog-latest-filter',
  imports: [TextBody2Component],
  templateUrl: './blog-latest-filter.component.html',
  styleUrl: './blog-latest-filter.component.css',
})
export class BlogLatestFilterComponent {
  @Input() category!: ArticleCategory;
  @Input() isActive: boolean = false;
  @Output() onApplyFilter: EventEmitter<ArticleCategory> = new EventEmitter();

  onClick() {
    this.onApplyFilter.emit(this.category);
  }
}
