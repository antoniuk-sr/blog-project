import { Link } from '@/app/types/link';
import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { layoutLinks } from '../data/layout-links';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  links: Link[] = layoutLinks;

  currentYear = new Date().getFullYear();
  constructor(private router: Router) {}
  isLinkActive(href: string): boolean {
    const path = this.router.url;
    return path === href || (href !== '/' && path.startsWith(href));
  }
}
