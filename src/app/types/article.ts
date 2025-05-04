import { Image } from './image';
import { User } from './user';

export interface Article {
  author: User;
  header: string;
  image: Image;
  subheader: string;
  text: string;
  on_home: boolean;
  tag: { tag: string; color: { color: string } };
}
