import { TextProps as RNTextProps } from 'react-native';
import { AppThemeColors } from '@providers/theme/colors/light-colors.ts';
import { IconEnum } from './typography-consts.ts';

export type TextAlign = 'left' | 'center' | 'right';

export type TextSize = 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32;

export type TextWeight = 300 | 400 | 500 | 600 | 700 | 900;

export type TextColorVariant = 'text' | 'textSecondary' | 'textTertiary';

export type TextColorKey = keyof AppThemeColors;

export type IconKey = keyof typeof IconEnum;

export interface TextProps extends Omit<RNTextProps, 'style'> {
  align?: TextAlign;
  size?: TextSize;
  weight?: TextWeight;
  colorVariant?: TextColorVariant;
  color?: TextColorKey;
  icon?: IconKey;
  style?: RNTextProps['style'];
}
