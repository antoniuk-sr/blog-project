import { Image } from './image';
import { User } from './user';

export interface AboutHero {
  header: string;
  subheader: string;
}
export interface Drives {
  header: string;
  subheader: string;
  card: DrivesCard[];
}
export interface DrivesCard {
  image: Image;
  header: string;
  subheader: string;
}

export interface OurDescription {
  first_header: string;
  first_description: string;
  second_header: string;
  second_description: string;
}

export interface TimelinePoint {
  header: string;
  subheader: string;
  date: string;
}

export interface Timeline {
  header: string;
  subheader: string;
  timeline_point: TimelinePoint[];
}

export interface OurTeam {
  header: string;
  subheader: string;
  team_card: OurTeamCard[];
}

export interface OurTeamCard {
  author: User;
}

export interface About {
  hero: AboutHero;
  drives: Drives;
  our_description: OurDescription;
  timeline: Timeline;
  team: OurTeam;
}
