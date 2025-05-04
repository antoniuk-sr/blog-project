import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { map, Observable } from 'rxjs';
import { About } from '@/app/types/about';

@Injectable({
  providedIn: 'root',
})
export class AboutService extends ApiService {
  getAbout(): Observable<About> {
    return this.request({
      method: 'get',
      url: 'about',
      params: {
        populate: [
          'hero',
          'drives.card.image',
          'our_description',
          'timeline.timeline_point',
          'team.team_card.author.avatar',
        ],
      },
    }).pipe(
      map((res: About): About => {
        return {
          ...res,
          drives: {
            ...res.drives,
            card: res.drives.card.map((card: any) => {
              return {
                ...card,
                image: this.convertImage(card.image),
              };
            }),
          },
          team: {
            ...res.team,
            team_card: res.team.team_card.map((card: any) => {
              return {
                ...card,
                author: {
                  ...card.author,
                  avatar: this.convertImage(card.author.avatar),
                },
              };
            }),
          },
        };
      })
    );
  }
}
