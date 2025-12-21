import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from '@navigation/RootNavigator';
import { LanguageProvider } from '@providers/language/LanguageProvider';
import { ThemeConfigProvider, useThemeConfig } from '@providers/theme/ThemeConfigProvider';
import { AppThemeColorsProvider } from '@providers/theme/AppThemeColorsProvider';
import { AppThemeStylesProvider } from '@providers/theme/AppThemeStylesProvider';

function AppContent() {
  const { isDark } = useThemeConfig();

  return (
    <>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <RootNavigator />
    </>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <ThemeConfigProvider>
        <AppThemeColorsProvider>
          <AppThemeStylesProvider>
            <LanguageProvider>
              <AppContent />
            </LanguageProvider>
          </AppThemeStylesProvider>
        </AppThemeColorsProvider>
      </ThemeConfigProvider>
    </SafeAreaProvider>
  );
}

export default App;
