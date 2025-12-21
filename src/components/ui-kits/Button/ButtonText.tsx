import { FC } from 'react';
import { Typography } from '@ui-kits/Typography/Typography';
import { ButtonBase } from './ButtonBase';
import { ButtonTextProps } from './button-types';
import { buttonSizeConfig } from './button-consts';
import { useButtonStyles } from './useButtonStyles';

export const ButtonText: FC<ButtonTextProps> = function (props) {
  const { text, textStyle, size = 'medium', state = 'active', colorVariant = 'blue', ...rest } = props;

  const buttonStyles = useButtonStyles(colorVariant, state);
  const sizeConfig = buttonSizeConfig[size];

  return (
    <ButtonBase
      size={size}
      state={state}
      colorVariant={colorVariant}
      {...rest}>
      <Typography
        size={sizeConfig.fontSize}
        weight={600}
        color={buttonStyles.textColorKey}
        style={textStyle}>
        {text}
      </Typography>
    </ButtonBase>
  );
};
