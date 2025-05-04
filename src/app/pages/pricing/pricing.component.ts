import { PricingService } from '@/app/api/pricing/pricing.service';
import { Component, inject, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Pricing } from '@/app/types/pricing';
import { DesktopH1Component } from '../../shared/ui/text/desktop-h1/desktop-h1.component';
import { TextBodyComponent } from '../../shared/ui/text/text-body/text-body.component';
import { NgFor } from '@angular/common';
import { PricingCardComponent } from '../../features/pricing/pricing-card/pricing-card.component';
@Component({
  selector: 'app-pricing',
  imports: [DesktopH1Component, TextBodyComponent, NgFor, PricingCardComponent],
  providers: [PricingService],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
})
export class PricingComponent implements OnInit {
  pricing!: Pricing;
  private destroy$ = new Subject<void>();

  pricingService: PricingService = inject(PricingService);

  ngOnInit(): void {
    this.pricingService
      .getPricing()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (pricing) => {
          console.log({ pricing });
          this.pricing = pricing;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
