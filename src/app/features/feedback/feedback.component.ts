import { PrimaryButtonComponent } from '@/app/shared/ui/buttons/primary-button/primary-button.component';
import { Feedback } from '@/app/types/feedback';
import { isPlatformBrowser, NgFor, NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import { FeedbackCardComponent } from './feedback-card/feedback-card.component';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
@Component({
  selector: 'app-feedback',
  imports: [PrimaryButtonComponent, FeedbackCardComponent, NgFor, NgIf],
  providers: [],
  templateUrl: './feedback.component.html',
  styleUrls: [
    '../../../../node_modules/swiper/swiper-bundle.min.css',
    './feedback.component.css',
  ],
})
export class FeedbackComponent implements AfterViewInit {
  isBrowser: boolean = false;
  swiper!: Swiper;
  swiperConfig = {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this.swiper = new Swiper('.swiper', {
      modules: [Pagination],
      slidesPerView: 3,
      loop: false,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
      },
    });
  }
  @Input() feedback!: Feedback;
}
