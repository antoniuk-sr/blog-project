import { SecondaryButtonComponent } from '@/app/shared/ui/buttons/secondary-button/secondary-button.component';
import { Article } from '@/app/types/article';
import { BlogPreview } from '@/app/types/blog-preview';
import { Component, Input } from '@angular/core';
import { BlogPreviewCardComponent } from './blog-preview-card/blog-preview-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-blog-preview',
  imports: [SecondaryButtonComponent, BlogPreviewCardComponent, NgFor],
  templateUrl: './blog-preview.component.html',
  styleUrl: './blog-preview.component.css',
})
export class BlogPreviewComponent {
  @Input() blogPreviewTitles!: BlogPreview;
  @Input() blogPreview: Article[] = [];
}
