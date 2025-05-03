import { Image } from './image';

export interface Feedback {
  title: string;
  cards: FeedbackCard[];
}

interface FeedbackCard {
  text: string;
  user: FeedbackUser;
}

interface FeedbackUser {
  name: string;
  role: string;
  avatar: Image;
}
