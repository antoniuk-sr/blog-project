import { Inject, Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { map, Observable } from 'rxjs';
import { Article } from '@/app/types/article';

@Injectable({ providedIn: 'root' })
export class BlogService extends ApiService {
  fetchHomePreview(): Observable<any> {
    return this.request({
      method: 'get',
      url: 'articles',
      params: {
        populate: ['tag.color', 'image', 'author.avatar'],
        filters: {
          on_home: {
            $eq: true,
          },
        },
      },
    }).pipe(
      map((data: Article[]): Article[] => {
        return data.map((article: Article) => {
          return {
            ...article,
            image: this.convertImage(article.image),
            author: {
              ...article.author,
              avatar: this.convertImage(article.author.avatar),
            },
          };
        });
      })
    );
  }
}
