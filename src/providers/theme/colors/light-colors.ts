/**
 * Light theme colors
 * This is the source of truth for AppThemeColors type
 */
export const lightColors = {
  // Base colors
  strongWhite: '#FFFFFF',
  strongBlack: '#000000',

  // Primary colors (example: blue palette)
  primary50: '#EFF6FF',
  primary100: '#DBEAFE',
  primary200: '#BFDBFE',
  primary300: '#93C5FD',
  primary400: '#60A5FA',
  primary500: '#3B82F6',
  primary600: '#2563EB',
  primary700: '#1D4ED8',
  primary800: '#1E40AF',
  primary900: '#1E3A8A',

  // Secondary colors (example: purple palette)
  secondary50: '#FAF5FF',
  secondary100: '#F3E8FF',
  secondary200: '#E9D5FF',
  secondary300: '#D8B4FE',
  secondary400: '#C084FC',
  secondary500: '#A855F7',
  secondary600: '#9333EA',
  secondary700: '#7E22CE',
  secondary800: '#6B21A8',
  secondary900: '#581C87',

  // Background colors
  background: '#FFFFFF',
  backgroundSecondary: '#F9FAFB',
  backgroundTertiary: '#F3F4F6',

  // Text colors
  text: '#111827',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',

  // Border colors
  border: '#E5E7EB',
  borderSecondary: '#D1D5DB',

  // Status colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
};

/**
 * AppThemeColors type is derived from lightColors
 * This ensures type safety and single source of truth
 */
export type AppThemeColors = typeof lightColors;
