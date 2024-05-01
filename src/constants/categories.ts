export const CATEGORIES = {
  FOOD: 'food',
  DRINKS: 'drinks',
  CLOTHES: 'clothes',
  ELECTRONICS: 'electronics',
  BOOKS: 'books',
} as const;

export type Category = typeof CATEGORIES[keyof typeof CATEGORIES];

export const CATEGORIES_ARRAY = Object.values(CATEGORIES);

const CATEGORIES_SET = new Set<string>(CATEGORIES_ARRAY);
export const isCategory = (value: string): value is Category => {
  return CATEGORIES_SET.has(value);
}