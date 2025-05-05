import { BlogService } from '@/app/api/blog/blog.service';
import { Article, ArticleCategory } from '@/app/types/article';
import { BlogLatest } from '@/app/types/blog';
import { NgFor } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
import { DesktopH2Component } from '../../../shared/ui/text/desktop-h2/desktop-h2.component';
import { BlogPreviewCardComponent } from '../../blog-preview/blog-preview-card/blog-preview-card.component';
import { BlogLatestFilterComponent } from './blog-latest-filter/blog-latest-filter.component';

@Component({
  selector: 'app-blog-latest',
  imports: [
    NgFor,
    DesktopH2Component,
    BlogLatestFilterComponent,
    BlogPreviewCardComponent,
  ],
  providers: [BlogService],
  templateUrl: './blog-latest.component.html',
  styleUrl: './blog-latest.component.css',
})
export class BlogLatestComponent implements OnInit {
  @Input() latest!: BlogLatest;
  categories: ArticleCategory[] = [];

  pageSize: number = 2;
  page = signal(1);
  pages: number[] = [];
  pageCount: number = 1;

  articles: Article[] = [];

  nextPage() {
    if (this.page() >= this.pageCount) return;
    this.page.update((p) => p + 1);
    this.refetchFilters();
  }

  prevPage() {
    if (this.page() <= 1) return;
    this.page.update((p) => p - 1);
    this.refetchFilters();
  }

  setPage(page: number): void {
    this.page.set(page);
    this.refetchFilters();
  }

  _activeFilter: ArticleCategory | null = null;
  get activeFilter() {
    return this._activeFilter;
  }

  set activeFilter(value: ArticleCategory | null) {
    this._activeFilter = value;
    this.page.set(1);
    this.refetchFilters();
  }

  onApplyFilter(category: ArticleCategory): void {
    this.activeFilter = category;
  }

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getArticleCategories().subscribe((categories) => {
      this.categories = categories;
      this.activeFilter = categories[0];
    });
  }
  refetchFilters(): void {
    this.blogService
      .fetchArticlesByCategory({
        documentId: this.activeFilter?.documentId!,
        pageSize: this.pageSize,
        page: this.page(),
      })
      .subscribe({
        next: (res) => {
          this.articles = res.data;
          this.pageCount = res.pagination.pageCount;
          this.page.set(res.pagination.page);
          this.pageSize = res.pagination.pageSize;
          this.pages = Array.from({ length: this.pageCount }, (_, i) => i + 1);
        },
      });
  }
}
