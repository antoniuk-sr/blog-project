import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TokensComponent } from './pages/tokens/tokens.component';

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
    path: 'contact_us',
    component: ContactUsComponent,
    title: 'Contact Us Page',
  },
  {
    path: 'tokens',
    component: TokensComponent,
    title: 'Tokens Page',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
