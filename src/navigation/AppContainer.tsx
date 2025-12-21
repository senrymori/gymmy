import { NavigationContainer } from '@react-navigation/native';
import { AppTabNavigator } from '@navigation/AppTabNavigator.tsx';
import { useThemeConfig } from '@providers/theme/ThemeConfigProvider.tsx';
import { StatusBar } from 'react-native';
import { Fragment } from 'react';

export const AppContainer = () => {
  const { isDark } = useThemeConfig();

  return (
    <Fragment>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <AppTabNavigator />
      </NavigationContainer>
    </Fragment>
  );
};
