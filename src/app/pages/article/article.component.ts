import { BlogService } from '@/app/api/blog/blog.service';
import { Article } from '@/app/types/article';
import {
  Component,
  Inject,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfoComponent } from '../../shared/ui/user-info/user-info.component';
import { TextBodyComponent } from '../../shared/ui/text/text-body/text-body.component';
import dayjs from 'dayjs';
import { DesktopH1Component } from '../../shared/ui/text/desktop-h1/desktop-h1.component';
import { DesktopH2Component } from '../../shared/ui/text/desktop-h2/desktop-h2.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [
    UserInfoComponent,
    TextBodyComponent,
    DesktopH1Component,
    DesktopH2Component,
  ],
  providers: [BlogService],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  private documentId: string = this.route.snapshot.params['id'];
  article = signal<Article | null>(null);
  isBrowser = false;

  getArticleDate() {
    const date = this.article()?.createdAt;
    if (!date) return '';
    return dayjs(date).format('DD.MM.YYYY');
  }
  private readonly blogService = inject(BlogService);
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit(): void {
    this.blogService
      .fetchArticleById({ documentId: this.documentId })
      .subscribe({
        next: (article) => {
          console.log(article);
          this.article.set(article);
        },
        error: (error) => {
          console.error(error);
        },
      });
    if (!this.isBrowser) return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
