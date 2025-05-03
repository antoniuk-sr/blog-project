import { HomeService } from '@/app/api/home/home.service';
import { Home } from '@/app/types/home';
import { Image } from '@/app/types/image';
import { Component, inject, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { HeroComponent } from '../../features/hero/hero.component';
import { TechnologiesComponent } from '@/app/features/technologies/technologies.component';
import { Technology } from '@/app/types/technology';
import { PortfolioComponent } from '@/app/features/portfolio/portfolio.component';
import { Portfolio } from '@/app/types/portfolio';

@Component({
  selector: 'app-index',
  imports: [HeroComponent, TechnologiesComponent, PortfolioComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent implements OnInit {
  private destroy$ = new Subject<void>();
  loading: boolean = true;
  error: string = '';

  title = 'index';
  header: string = '';
  subheader: string = '';
  technologies: Technology[] = [];
  portfolio: Portfolio[] = [];
  image: Image = {
    documentId: '',
    formats: {
      thumbnail: {
        url: '',
      },
      small: {
        url: '',
      },
      medium: {
        url: '',
      },
      large: {
        url: '',
      },
    },
  };

  homeService = inject(HomeService);
  ngOnInit(): void {
    this.loading = true;
    this.homeService
      .getHome()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: Home) => {
          (this.loading = false), (this.error = '');
          (this.header = data.Hero?.Header),
            (this.subheader = data.Hero?.subheader),
            (this.image = data.Hero?.hero_image);
          this.technologies = data.technologies;
          this.portfolio = data.portfolio;
        },
        error: (error) => {
          console.log(error);
          (this.loading = false), (this.error = error.message);
        },
      });
  }
  constructor() {}
}
