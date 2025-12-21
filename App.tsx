import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContainer } from '@navigation/AppContainer.tsx';
import { LanguageProvider } from '@providers/language/LanguageProvider';
import { ThemeConfigProvider } from '@providers/theme/ThemeConfigProvider';
import { AppThemeColorsProvider } from '@providers/theme/AppThemeColorsProvider';
import { AppThemeStylesProvider } from '@providers/theme/AppThemeStylesProvider';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeConfigProvider>
        <AppThemeColorsProvider>
          <AppThemeStylesProvider>
            <LanguageProvider>
              <AppContainer />
            </LanguageProvider>
          </AppThemeStylesProvider>
        </AppThemeColorsProvider>
      </ThemeConfigProvider>
    </SafeAreaProvider>
  );
}

export default App;
