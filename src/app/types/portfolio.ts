import { Image } from './image';

export interface Portfolio {
  header: string;
  subheader: string;
  image: Image;
  is_main: boolean;
}
