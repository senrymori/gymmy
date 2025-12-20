import LocalizedStrings from 'react-native-localization';
import { en } from './languages/en';
import { ru } from './languages/ru';
import { kk } from './languages/kk';
import { fr } from './languages/fr';
import { es } from './languages/es';
import { uk } from './languages/uk';

const languages = {
  en,
  ru,
  kk,
  fr,
  es,
  uk,
};

export const localizedStrings = new LocalizedStrings(languages);

// Extract type from the language structure
// LocalizedStrings makes language properties available directly on the instance
// We use the language structure type since LocalizedStrings exposes these properties at runtime
export type Translations = typeof en;
