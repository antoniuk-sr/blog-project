import { Inject, Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { map, Observable } from 'rxjs';
import { Article, ArticleCategory, ArticleTag } from '@/app/types/article';
import { Blog } from '@/app/types/blog';

@Injectable({ providedIn: 'root' })
export class BlogService extends ApiService {
  fetchArticleById({ documentId }: { documentId: string }) {
    return this.request({
      method: 'get',
      url: 'articles',
      params: {
        populate: [
          'tag.color',
          'image',
          'author.avatar',
          'tag.article_cagegory',
        ],
      },
      pathParams: { id: documentId },
    }).pipe(
      map((res) => ({
        ...res.data,
        image: this.convertImage(res.data.image),
        author: {
          ...res.data.author,
          avatar: this.convertImage(res.data.author.avatar),
        },
      }))
    );
  }
  fetchArticlesByCategory({
    documentId,
    page,
    pageSize,
  }: {
    documentId: string;
    pageSize: number;
    page: number;
  }): Observable<any> {
    return this.request({
      method: 'get',
      url: 'articles',
      params: {
        populate: [
          'tag.color',
          'image',
          'author.avatar',
          'tag.article_cagegory',
        ],
        pagination: {
          pageSize,
          page,
        },
        sort: ['createdAt:desc'],

        filters: {
          tag: {
            article_cagegory: {
              documentId: {
                $eq: documentId,
              },
            },
          },
        },
      },
    }).pipe(
      map(
        (
          articles: any
        ): {
          data: Article[];
          pagination: { pageSize: number; page: number; pageCount: number };
        } => {
          const data = articles.data.map((article: Article) => {
            return {
              ...article,
              image: this.convertImage(article.image),
              author: {
                ...article.author,
                avatar: this.convertImage(article.author.avatar),
              },
            };
          });
          return {
            data,
            pagination: articles.meta.pagination,
          };
        }
      )
    );
  }
  fetchHomePreview(filters?: object): Observable<any> {
    return this.request({
      method: 'get',
      url: 'articles',
      params: {
        populate: ['tag.color', 'image', 'author.avatar'],
        filters: {
          ...(filters || {}),
          on_home: {
            $eq: true,
          },
        },
      },
    }).pipe(
      map((data: any): Article[] => {
        return data.data.map((article: Article) => {
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

  getArticleCategories(): Observable<ArticleCategory[]> {
    return this.request({
      method: 'get',
      url: 'article-cagegories',
      params: {
        sort: ['order:asc'],
      },
    }).pipe(map((data: any) => data.data));
  }

  getBlog(): Observable<Blog> {
    return this.request({
      method: 'get',
      url: 'blog',
      params: {
        populate: [
          'hero.main_article.image',
          'hero.main_article.author.avatar',
          'hero.main_article.tag.color',
          'latest',
        ],
      },
    }).pipe(
      map((res: any): Blog => {
        const data = res.data;
        return {
          ...data,
          hero: {
            ...data.hero,
            main_article: {
              ...data.hero.main_article,
              image: this.convertImage(data.hero.main_article.image),
              author: {
                ...data.hero.main_article.author,
                avatar: this.convertImage(data.hero.main_article.author.avatar),
              },
            },
          },
        };
      })
    );
  }
}
