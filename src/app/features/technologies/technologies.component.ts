import { Technology } from '@/app/types/technology';
import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technologies',
  imports: [NgFor],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
})
export class TechnologiesComponent {
  @Input() technologies: Technology[] = [];
}
