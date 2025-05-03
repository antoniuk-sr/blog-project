import { Image } from '@/app/types/image';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() header: string = '';
  @Input() subheader: string = '';
  @Input() image!: Image;
}
