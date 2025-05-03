export const entities = ['Hero', 'Tegnologies'] as const;
export type Entity = (typeof entities)[number];
