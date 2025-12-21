import { FC } from 'react';
import { Switch as RNSwitch, SwitchProps as RNSwitchProps } from 'react-native';
import { lightColors } from '@providers/theme/colors/light-colors.ts';

interface SwitchProps extends Omit<RNSwitchProps, 'trackColor' | 'thumbColor'> {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export const Switch: FC<SwitchProps> = function (props) {
  const { value, onValueChange, ...rest } = props;
  return (
    <RNSwitch
      value={value}
      onValueChange={onValueChange}
      trackColor={{
        false: lightColors.gray100,
        true: lightColors.blue500,
      }}
      thumbColor={lightColors.strongWhite}
      ios_backgroundColor={lightColors.gray100}
      {...rest}
    />
  );
};
