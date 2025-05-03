import { Link } from '@/app/types/link';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { layoutLinks } from '../data/layout-links';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  links: Link[] = layoutLinks;
}
