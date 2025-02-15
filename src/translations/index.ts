import { en } from './en';
import { he } from './he';
import { pl } from './pl';
import { sv } from './sv';
import { ar } from './ar';

export const translations = {
  en,
  he,
  pl,
  sv,
  ar
};

export type Language = keyof typeof translations;
