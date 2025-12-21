import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from '@ui-kits/Switch';
import { useThemeConfig } from '@providers/theme/ThemeConfigProvider';
import { useAppThemeStyles } from '@providers/theme/AppThemeStylesProvider';
import { ThemeMode } from '@providers/theme/theme-types.ts';

interface ThemeToggleProps {
  showLabel?: boolean;
}

export const ThemeToggle: FC<ThemeToggleProps> = function ({ showLabel = true }) {
  const { setTheme, isDark } = useThemeConfig();
  const styles = useAppThemeStyles();

  return (
    <View style={componentStyles.container}>
      {showLabel && <Text style={[componentStyles.label, styles.textMain]}>{isDark ? 'Dark' : 'Light'} Mode</Text>}
      <Switch
        value={isDark}
        onValueChange={(value) => {
          setTheme(value ? ThemeMode.dark : ThemeMode.light);
        }}
      />
    </View>
  );
};

const componentStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  label: {
    fontSize: 16,
  },
});
