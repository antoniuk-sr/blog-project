import { Portfolio } from '@/app/types/portfolio';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CardComponent } from './card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [CardComponent, NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnChanges {
  @Input() portfolio: Portfolio[] = [];

  ngOnChanges(changes: SimpleChanges) {
    const {
      portfolio: { currentValue },
    } = changes;

    const mainImage = currentValue.find((item: Portfolio) => item.is_main);
    const secondImages = currentValue.filter(
      (item: Portfolio) => !item.is_main
    );
    this.mainImage = mainImage;
    this.leftCards = secondImages.slice(0, 2);
    this.rightCards = secondImages.slice(2, 4);
  }

  leftCards: Portfolio[] = [];
  rightCards: Portfolio[] = [];
  mainImage!: Portfolio;
}
