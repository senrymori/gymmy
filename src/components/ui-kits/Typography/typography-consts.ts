import { TextWeight } from './typography-types.ts';

// Mapping weight number to font family name
export const weightToFontFamily: Record<TextWeight, string> = {
  300: 'Roboto-Light',
  400: 'Roboto-Regular',
  500: 'Roboto-Medium',
  600: 'Roboto-SemiBold',
  700: 'Roboto-Bold',
  900: 'Roboto-Black',
};
