import { FC, PropsWithChildren, useCallback } from 'react';
import { ActivityIndicator, TouchableOpacity, ViewStyle } from 'react-native';
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useAppThemeColors } from '@providers/theme/AppThemeColorsProvider';
import { ButtonBaseProps } from './button-types';
import { buttonSizeConfig } from './button-consts';
import { useButtonStyles } from './useButtonStyles';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export const ButtonBase: FC<ButtonBaseProps & PropsWithChildren> = function (props) {
  const { size = 'medium', state = 'active', colorVariant = 'blue', onPress, style, children, ...rest } = props;

  const buttonStyles = useButtonStyles(colorVariant, state);
  const colors = useAppThemeColors();
  const pressed = useSharedValue(0);
  const isDisabled = state === 'disabled' || state === 'loading';

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    if (isDisabled) {
      return { backgroundColor: buttonStyles.backgroundColor };
    }
    return {
      backgroundColor: interpolateColor(
        pressed.value,
        [0, 1],
        [buttonStyles.backgroundColor, buttonStyles.pressedColor]
      ),
    };
  });

  const handlePressIn = useCallback(() => {
    if (!isDisabled) {
      pressed.value = withTiming(1, { duration: 150 });
    }
  }, [isDisabled, pressed]);

  const handlePressOut = useCallback(() => {
    if (!isDisabled) {
      pressed.value = withTiming(0, { duration: 150 });
    }
  }, [isDisabled, pressed]);

  const handlePress = useCallback(() => {
    if (!isDisabled && onPress) {
      onPress();
    }
  }, [isDisabled, onPress]);

  const sizeConfig = buttonSizeConfig[size];
  const buttonStyle: ViewStyle = {
    height: sizeConfig.height,
    borderRadius: sizeConfig.borderRadius,
    paddingHorizontal: sizeConfig.paddingHorizontal,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  };

  return (
    <AnimatedTouchableOpacity
      activeOpacity={1}
      disabled={isDisabled}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[buttonStyle, animatedBackgroundStyle, style]}
      {...rest}>
      {state === 'loading' ? (
        <ActivityIndicator
          size="small"
          color={colors[buttonStyles.textColorKey]}
        />
      ) : (
        children
      )}
    </AnimatedTouchableOpacity>
  );
};
