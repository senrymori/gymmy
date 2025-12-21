import { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from '@ui-kits/Typography/Typography';
import { ButtonBase } from './ButtonBase';
import { ButtonUniversalProps } from './button-types';
import { buttonSizeConfig } from './button-consts';
import { useButtonStyles } from './useButtonStyles';

export const ButtonUniversal: FC<ButtonUniversalProps> = function (props) {
  const {
    text,
    icon,
    iconPosition = 'left',
    textStyle,
    size = 'medium',
    state = 'active',
    colorVariant = 'blue',
    ...rest
  } = props;

  const buttonStyles = useButtonStyles(colorVariant, state);
  const sizeConfig = buttonSizeConfig[size];

  return (
    <ButtonBase
      size={size}
      state={state}
      colorVariant={colorVariant}
      {...rest}>
      <View style={styles.contentContainer}>
        {iconPosition === 'left' && (
          <>
            <Typography
              icon={icon}
              size={sizeConfig.iconSize}
              color={buttonStyles.textColorKey}
            />
            <View style={styles.iconSpacing} />
          </>
        )}
        <Typography
          size={sizeConfig.fontSize}
          weight={600}
          color={buttonStyles.textColorKey}
          style={textStyle}>
          {text}
        </Typography>
        {iconPosition === 'right' && (
          <>
            <View style={styles.iconSpacing} />
            <Typography
              icon={icon}
              size={sizeConfig.iconSize}
              color={buttonStyles.textColorKey}
            />
          </>
        )}
      </View>
    </ButtonBase>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSpacing: {
    width: 8,
  },
});
