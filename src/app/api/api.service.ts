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
  }: {
    method: 'get';
    url: 'Home';
    params: object;
  }): Observable<any> {
    const urlWithParams = `${this.baseUrl}/${url}?${stringify(params)}`;
    return this.http[method](urlWithParams).pipe(
      map((res: any) => {
        return res.data;
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
