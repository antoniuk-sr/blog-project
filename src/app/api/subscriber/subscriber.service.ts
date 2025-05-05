import { map, Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SubscriberService extends ApiService {
  find({ email }: { email: string }) {
    return this.request({
      method: 'get',
      url: 'subscribers',
      params: {
        filters: {
          email: {
            $eq: email,
          },
        },
      },
    }).pipe(map((res: any) => res.data));
  }
  subscribe({ email }: { email: string }): Observable<any> {
    return this.request({
      method: 'post',
      url: 'subscribers',
      data: {
        data: { email, enabled: true },
      },
      params: {},
    }).pipe(map((res: any) => res.data));
  }
  unsubscribe({ id }: { id: string }): Observable<any> {
    return this.request({
      method: 'put',
      url: 'subscribers',
      data: {
        data: { enabled: false },
      },
      params: {},
      pathParams: { id },
    }).pipe(map((res: any) => res.data));
  }
}
