const locales = ['ru', 'en'] as const;

export type Locale = (typeof locales)[number];
