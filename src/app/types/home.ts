import { BlogPreview } from './blog-preview';
import { ContactUs } from './contactUs';
import { Feedback } from './feedback';
import { Hero } from './hero';
import { Portfolio } from './portfolio';
import { Technology } from './technology';

export interface Home {
  Hero: Hero;
  technologies: Technology[];
  portfolio: Portfolio[];
  feedback: Feedback;
  contact_us: ContactUs;
  blog_preview: BlogPreview;
}
