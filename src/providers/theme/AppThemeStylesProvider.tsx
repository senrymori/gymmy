import { createContext, FC, PropsWithChildren, useContext, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { AppThemeColors } from '@providers/theme/colors/light-colors.ts';
import { useAppThemeColors } from './AppThemeColorsProvider';

/**
 * Creates theme styles object from colors
 * This function is used as source of truth for AppThemeStyles type
 */
function createThemeStyles(colors: AppThemeColors) {
  return StyleSheet.create({
    // Main secondary styles
    mainSecondary: { color: colors.secondary500 },
    mainSecondaryBG: { backgroundColor: colors.secondary500 },
    mainSecondaryBorder: { borderColor: colors.secondary500 },

    // Main primary styles
    mainPrimary: { color: colors.primary500 },
    mainPrimaryBG: { backgroundColor: colors.primary500 },
    mainPrimaryBorder: { borderColor: colors.primary500 },

    // Text styles
    textMain: { color: colors.text },
    textSecondary: { color: colors.textSecondary },
    textTertiary: { color: colors.textTertiary },

    // Background styles
    backgroundMain: { backgroundColor: colors.background },
    backgroundSecondary: { backgroundColor: colors.backgroundSecondary },
    backgroundTertiary: { backgroundColor: colors.backgroundTertiary },

    // Border styles
    borderMain: { borderColor: colors.border },
    borderSecondary: { borderColor: colors.borderSecondary },

    // Status styles
    success: { color: colors.success },
    successBG: { backgroundColor: colors.success },
    warning: { color: colors.warning },
    warningBG: { backgroundColor: colors.warning },
    error: { color: colors.error },
    errorBG: { backgroundColor: colors.error },
    info: { color: colors.info },
    infoBG: { backgroundColor: colors.info },
  });
}

export type AppThemeStyles = ReturnType<typeof createThemeStyles>;

const AppThemeStylesContext = createContext<AppThemeStyles | undefined>(undefined);

export const AppThemeStylesProvider: FC<PropsWithChildren> = function ({ children }) {
  const colors = useAppThemeColors();
  const styles = useMemo(() => createThemeStyles(colors), [colors]);
  return <AppThemeStylesContext.Provider value={styles}>{children}</AppThemeStylesContext.Provider>;
};

export const useAppThemeStyles = (): AppThemeStyles => {
  const context = useContext(AppThemeStylesContext);
  if (context === undefined) {
    throw new Error('useAppThemeStyles must be used within an AppThemeStylesProvider');
  }
  return context;
};
