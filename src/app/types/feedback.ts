import { Image } from './image';
import { User } from './user';

export interface Feedback {
  title: string;
  cards: FeedbackCard[];
}

export interface FeedbackCard {
  text: string;
  user: FeedbackUser;
}

type FeedbackUser = User;
