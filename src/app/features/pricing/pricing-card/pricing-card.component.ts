import { PricingCard } from '@/app/types/pricing';
import { Component, Input } from '@angular/core';
import { DesktopH2Component } from '../../../shared/ui/text/desktop-h2/desktop-h2.component';
import { TextBodyComponent } from '../../../shared/ui/text/text-body/text-body.component';
import { NgFor } from '@angular/common';
import { PrimaryButtonComponent } from '../../../shared/ui/buttons/primary-button/primary-button.component';

@Component({
  selector: 'app-pricing-card',
  imports: [
    DesktopH2Component,
    TextBodyComponent,
    NgFor,
    PrimaryButtonComponent,
  ],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.css',
})
export class PricingCardComponent {
  @Input() card!: PricingCard;
}
