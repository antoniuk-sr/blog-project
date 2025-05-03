import { Link } from '@/app/types/link';
import { Component } from '@angular/core';
import { layoutLinks } from '../data/layout-links';
import { NgClass, NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgFor, RouterModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  links: Link[] = layoutLinks;

  constructor(private router: Router) {}

  isLinkActive(href: string): boolean {
    return true;
  }
}
