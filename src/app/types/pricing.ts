export interface PricingCardPoint {
  point: string;
}

export interface PricingCard {
  tariff_name: string;
  price: string;
  description: string;
  points: PricingCardPoint[];
}

export interface Pricing {
  header: string;
  subheader: string;
  cards: PricingCard[];
}
