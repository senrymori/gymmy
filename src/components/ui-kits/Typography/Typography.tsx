import { FC } from 'react';
import { Text as RNText, TextStyle } from 'react-native';
import { useAppThemeColors } from '@providers/theme/AppThemeColorsProvider';
import { TextProps } from './typography-types.ts';
import { weightToFontFamily } from './typography-consts.ts';

export const Typography: FC<TextProps> = function (props) {
  const { align = 'left', size = 16, weight = 400, colorVariant, color, style, ...rest } = props;

  const colors = useAppThemeColors();

  const textStyle: TextStyle = {
    textAlign: align,
    fontSize: size,
    fontFamily: weightToFontFamily[weight],
  };

  // Priority: color > colorVariant > default (text)
  if (color) {
    textStyle.color = colors[color];
  } else if (colorVariant) {
    textStyle.color = colors[colorVariant];
  } else {
    textStyle.color = colors.text;
  }

  return (
    <RNText
      style={[textStyle, style]}
      {...rest}
    />
  );
};
