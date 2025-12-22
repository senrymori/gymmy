import { ButtonColorVariant, ButtonState } from './button-types';
import { TextColorKey } from '@ui-kits/Typography/typography-types';

export type ColorKey = TextColorKey;

export interface ButtonColorConfig {
  active: {
    background: ColorKey;
    pressed: ColorKey;
    text: ColorKey;
  };
  disabled: {
    background: ColorKey;
    text: ColorKey;
  };
}

export const buttonColorConfigs: Record<ButtonColorVariant, ButtonColorConfig> = {
  blue: {
    active: {
      background: 'blue500',
      pressed: 'blue600',
      text: 'strongWhite',
    },
    disabled: {
      background: 'blue300',
      text: 'blue500',
    },
  },
  contrast: {
    active: {
      background: 'gray900',
      pressed: 'gray700',
      text: 'textAlternative',
    },
    disabled: {
      background: 'gray400',
      text: 'textSecondary',
    },
  },
};

export function getButtonColorKeys(
  variant: ButtonColorVariant,
  state: ButtonState
): { backgroundColorKey: ColorKey; textColorKey: ColorKey; pressedColorKey: ColorKey } {
  const config = buttonColorConfigs[variant];

  if (state === 'disabled' || state === 'loading') {
    return {
      backgroundColorKey: config.disabled.background,
      textColorKey: config.disabled.text,
      pressedColorKey: config.disabled.background,
    };
  }

  return {
    backgroundColorKey: config.active.background,
    textColorKey: config.active.text,
    pressedColorKey: config.active.pressed,
  };
}
