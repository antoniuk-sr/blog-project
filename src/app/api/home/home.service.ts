import { Home } from '@/app/types/home';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService extends ApiService {
  constructor() {
    super();
  }

  getHome(): Observable<Home> {
    return this.request({
      method: 'get',
      url: 'Home',
      params: {
        populate: [
          'Hero.hero_image',
          'technologies.image',
          'portfolio.image',
          'feedback.cards.user.avatar',
          'contact_us.video',
          'blog_preview',
        ],
      },
    }).pipe(
      map((data: Home): Home => {
        // update images urls
        return {
          ...data,
          Hero: {
            ...data.Hero,
            hero_image: this.convertImage(data.Hero.hero_image),
          },
          technologies: data.technologies.map((technology: any) => {
            return {
              ...technology,
              image: this.convertImage(technology.image),
            };
          }),
          portfolio: data.portfolio.map((portfolio: any) => {
            return {
              ...portfolio,
              image: this.convertImage(portfolio.image),
            };
          }),
          feedback: {
            ...data.feedback,
            cards: data.feedback.cards.map((card: any) => {
              return {
                ...card,
                user: {
                  ...card.user,
                  avatar: this.convertImage(card.user.avatar),
                },
              };
            }),
          },
          contact_us: {
            ...data.contact_us,
            video: this.convertVideo(data.contact_us.video),
          },
        };
      })
    );
  }
}
