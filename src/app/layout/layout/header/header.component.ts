import { Link } from '@/app/types/link';
import { Component, inject } from '@angular/core';
import { layoutLinks } from '../data/layout-links';
import { NgClass, NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgFor, RouterModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  links: Link[] = layoutLinks;

  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private router: Router) {}

  isLinkActive(href: string): boolean {
    const path = this.router.url;
    console.log({ path, href });
    return path === href || (href !== '/' && path.startsWith(href));
  }
}
