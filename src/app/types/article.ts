import { Image } from './image';
import { User } from './user';

export interface ArticleTag {
  tag: string;
  color: { color: string };
  article_cagegory: ArticleCategory;
}

export interface ArticleCategory {
  name: string;
  documentId: string;
}

export interface Article {
  createdAt: string;
  documentId: string;
  author: User;
  header: string;
  image: Image;
  subheader: string;
  text: string;
  on_home: boolean;
  tag: ArticleTag;
}
