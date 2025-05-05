import { Article } from './article';

export interface BlogHero {
  header: string;
  subheader: string;
  main_article: Article;
}

export interface BlogLatest {
  header: string;
}

export interface Blog {
  subscribe_header: string;
  unsubscribe_header: string;
  hero: BlogHero;
  latest: BlogLatest;
}
