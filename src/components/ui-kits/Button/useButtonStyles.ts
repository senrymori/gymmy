import { useMemo } from 'react';
import { useAppThemeColors } from '@providers/theme/AppThemeColorsProvider';
import { ButtonColorVariant, ButtonState } from './button-types';
import { getButtonColorKeys, ColorKey } from './button-color-config';

export interface ButtonStyles {
  backgroundColor: string;
  textColorKey: ColorKey;
  pressedColor: string;
}

export function useButtonStyles(variant: ButtonColorVariant, state: ButtonState): ButtonStyles {
  const colors = useAppThemeColors();

  return useMemo(() => {
    const colorKeys = getButtonColorKeys(variant, state);
    return {
      backgroundColor: colors[colorKeys.backgroundColorKey],
      textColorKey: colorKeys.textColorKey,
      pressedColor: colors[colorKeys.pressedColorKey],
    };
  }, [variant, state, colors]);
}
