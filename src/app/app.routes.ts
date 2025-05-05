import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TokensComponent } from './pages/tokens/tokens.component';
import { ArticleComponent } from './pages/article/article.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    title: 'Home Page',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Page',
  },
  {
    path: 'pricing',
    component: PricingComponent,
    title: 'Pricing Page',
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'Blog Page',
  },
  {
    path: 'article/:id',
    component: ArticleComponent,
    title: 'Article Page',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
