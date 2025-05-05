import { BlogService } from '@/app/api/blog/blog.service';
import { BlogHeroComponent } from '@/app/features/blog/blog-hero/blog-hero.component';
import { BlogLatestComponent } from '@/app/features/blog/blog-latest/blog-latest.component';
import { Blog } from '@/app/types/blog';
import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DesktopH2Component } from '../../shared/ui/text/desktop-h2/desktop-h2.component';
import { InputButtonComponent } from '../../shared/ui/input/input-white/input-white.component';
import { isPlatformBrowser, NgIf } from '@angular/common';
import { SubscriberService } from '@/app/api/subscriber/subscriber.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  imports: [
    BlogHeroComponent,
    BlogLatestComponent,
    DesktopH2Component,
    InputButtonComponent,
    NgIf,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  blogService: BlogService = inject(BlogService);
  subscriberService: SubscriberService = inject(SubscriberService);
  successHeader: string = '';

  subscribeLoading: boolean = false;

  isBrowser: boolean = false;

  email: string = '';
  isSubscribed: boolean = false;
  subscriberId: string = '';
  subscribeError: string = '';

  blog!: Blog;

  ngOnInit() {
    this.blogService.getBlog().subscribe((blog) => {
      this.blog = blog;
    });
  }

  unsubscribe() {
    this.subscribeLoading = true;
    this.subscriberService.unsubscribe({ id: this.subscriberId }).subscribe({
      next: () => {
        this.subscribeLoading = false;
        this.handleUnsubscribe();
      },
    });
  }

  subscribe(email: string) {
    this.subscribeLoading = true;
    this.subscribeError = '';
    this.subscriberService.subscribe({ email }).subscribe({
      next: (response) => {
        this.subscribeLoading = false;
        this.handleSuccessSubscribe({ email, id: response.documentId });
      },
      error: (error: HttpErrorResponse) => {
        this.subscribeLoading = false;
        const message = error.error.error.details.errors[0]?.message;
        if (message === 'This attribute must be unique') {
          this.subscriberService.find({ email }).subscribe({
            next: (data) => {
              this.handleSuccessSubscribe({
                email: data[0].email,
                id: data[0].documentId,
              });
            },
          });
          return;
        }
        this.subscribeError = error.message;
        this.subscribeLoading = false;
      },
    });
  }

  private handleSuccessSubscribe({ email, id }: { email: string; id: string }) {
    this.subscribeError = '';
    this.email = email;
    this.isSubscribed = true;
    this.successHeader = 'Подписка оформлена';
    localStorage.setItem('email', email);
    localStorage.setItem('isSubscribed', 'true');
    localStorage.setItem('subscriberId', id);
  }
  private handleUnsubscribe() {
    this.subscribeError = '';
    this.email = '';
    this.isSubscribed = false;
    localStorage.removeItem('email');
    localStorage.removeItem('isSubscribed');
    localStorage.removeItem('subscriberId');
  }

  getHeaderText() {
    if (this.successHeader) return this.successHeader;
    return this.isSubscribed
      ? this.blog?.unsubscribe_header
      : this.blog?.subscribe_header;
  }

  getBackgroundColor() {
    return this.isSubscribed ? 'bg-[var(--green)]' : 'bg-[var(--blue)]';
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (!this.isBrowser) return;
    this.email = localStorage.getItem('email') || '';
    this.isSubscribed = localStorage.getItem('isSubscribed') === 'true';
    this.subscriberId = localStorage.getItem('subscriberId') || '';
  }
}
