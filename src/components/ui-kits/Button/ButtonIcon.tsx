import { FC } from 'react';
import { ViewStyle, StyleSheet } from 'react-native';
import { Typography } from '@ui-kits/Typography/Typography';
import { ButtonBase } from './ButtonBase';
import { ButtonIconProps } from './button-types';
import { iconOnlySizeConfig } from './button-consts';
import { useButtonStyles } from './useButtonStyles';

export const ButtonIcon: FC<ButtonIconProps> = function (props) {
  const { icon, size = 'medium', state = 'active', colorVariant = 'blue', style, ...rest } = props;

  const buttonStyles = useButtonStyles(colorVariant, state);
  const sizeConfig = iconOnlySizeConfig[size];

  const iconButtonStyle: ViewStyle = {
    width: sizeConfig.width,
    height: sizeConfig.height,
    paddingHorizontal: 0,
  };

  return (
    <ButtonBase
      size={size}
      state={state}
      colorVariant={colorVariant}
      style={StyleSheet.flatten([iconButtonStyle, style])}
      {...rest}>
      <Typography
        icon={icon}
        size={sizeConfig.iconSize}
        color={buttonStyles.textColorKey}
      />
    </ButtonBase>
  );
};
