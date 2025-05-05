import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { stringify } from 'qs';
import { map, Observable } from 'rxjs';
import { Image } from '@/app/types/image';
import { Video } from '../types/video';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http: HttpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:1337/api';
  private uploadsUrl = 'http://localhost:1337';

  protected request({
    method,
    url,
    params,
    pathParams,
    data,
  }: {
    method: 'get' | 'post' | 'put';
    url:
      | 'Home'
      | 'articles'
      | 'about'
      | 'pricing'
      | 'blog'
      | 'subscribers'
      | 'article-cagegories';
    params: object;
    data?: object;
    pathParams?: { id: string };
  }): Observable<any> {
    const urlWithParams = `${this.baseUrl}/${url}?${stringify(params)}`;
    let res;
    switch (method) {
      case 'get':
        res = this.http.get(
          pathParams?.id
            ? `${this.baseUrl}/${url}/${pathParams?.id}?${stringify(
                params
              )}`.trim()
            : urlWithParams
        );
        break;

      case 'put':
        res = this.http.put(`${this.baseUrl}/${url}/${pathParams?.id}`, data);
        break;
      case 'post':
        res = this.http.post(urlWithParams, data);
        break;
    }
    return res.pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  protected convertVideo(video: Video): Video {
    return {
      ...video,
      url: `${this.uploadsUrl}${video.url}`,
    };
  }
  protected convertImage(image: Image): Image {
    if (!image) return image;
    if (image?.ext === '.svg') {
      return {
        ...image,
        url: `${this.uploadsUrl}${image.url}`,
      };
    }
    return {
      ...image,
      formats: {
        thumbnail: {
          url:
            image.formats.thumbnail?.url &&
            `${this.uploadsUrl}${image.formats.thumbnail?.url}`,
        },
        small: {
          url:
            image.formats.small?.url &&
            `${this.uploadsUrl}${image.formats.small?.url}`,
        },
        medium: {
          url:
            image.formats.medium?.url &&
            `${this.uploadsUrl}${image.formats.medium?.url}`,
        },
        large: {
          url:
            image.formats.large?.url &&
            `${this.uploadsUrl}${image.formats.large?.url}`,
        },
      },
    };
  }

  constructor() {}
}
