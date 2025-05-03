import { Feedback } from './feedback';
import { Hero } from './hero';
import { Portfolio } from './portfolio';
import { Technology } from './technology';

export interface Home {
  Hero: Hero;
  technologies: Technology[];
  portfolio: Portfolio[];
  feedback: Feedback;
}
