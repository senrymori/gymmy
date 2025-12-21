import { TouchableOpacityProps, ViewStyle, TextStyle } from 'react-native';
import { TextSize } from '@ui-kits/Typography/typography-types';
import { IconEnum } from '../Typography/typography-consts';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonState = 'active' | 'disabled' | 'loading';

export type IconPosition = 'left' | 'right';

export type ButtonColorVariant = 'blue' | 'contrast';

export interface ButtonBaseProps extends Omit<TouchableOpacityProps, 'disabled' | 'style'> {
  size?: ButtonSize;
  state?: ButtonState;
  colorVariant?: ButtonColorVariant;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
}

export interface ButtonTextProps extends ButtonBaseProps {
  text: string;
  textStyle?: TextStyle;
}

export interface ButtonIconProps extends ButtonBaseProps {
  icon: IconEnum;
}

export interface ButtonUniversalProps extends ButtonBaseProps {
  text: string;
  icon: IconEnum;
  iconPosition?: IconPosition;
  textStyle?: TextStyle;
}

export type ButtonSizeConfig = {
  height: number;
  paddingHorizontal: number;
  fontSize: TextSize;
  iconSize: TextSize;
  borderRadius: number;
};
