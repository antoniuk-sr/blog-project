import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { map, Observable } from 'rxjs';
import { Pricing } from '@/app/types/pricing';

@Injectable({ providedIn: 'root' })
export class PricingService extends ApiService {
  getPricing(): Observable<Pricing> {
    return this.request({
      method: 'get',
      url: 'pricing',
      params: {
        populate: ['cards.points'],
      },
    }).pipe(
      map((res: Pricing): Pricing => {
        return res;
      })
    );
  }
}
