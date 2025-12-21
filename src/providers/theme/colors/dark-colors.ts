import { AppThemeColors } from './light-colors.ts';

/**
 * Dark theme colors
 * TypeScript will ensure all properties from lightColors are present
 */
export const darkColors: AppThemeColors = {
  // Base colors
  strongWhite: '#FFFFFF',
  strongBlack: '#000000',

  // Primary colors (example: blue palette - adjusted for dark)
  primary50: '#1E3A8A',
  primary100: '#1E40AF',
  primary200: '#1D4ED8',
  primary300: '#2563EB',
  primary400: '#3B82F6',
  primary500: '#60A5FA',
  primary600: '#93C5FD',
  primary700: '#BFDBFE',
  primary800: '#DBEAFE',
  primary900: '#EFF6FF',

  // Secondary colors (example: purple palette - adjusted for dark)
  secondary50: '#581C87',
  secondary100: '#6B21A8',
  secondary200: '#7E22CE',
  secondary300: '#9333EA',
  secondary400: '#A855F7',
  secondary500: '#C084FC',
  secondary600: '#D8B4FE',
  secondary700: '#E9D5FF',
  secondary800: '#F3E8FF',
  secondary900: '#FAF5FF',

  // Background colors
  background: '#111827',
  backgroundSecondary: '#1F2937',
  backgroundTertiary: '#374151',

  // Text colors
  text: '#F9FAFB',
  textSecondary: '#D1D5DB',
  textTertiary: '#9CA3AF',

  // Border colors
  border: '#374151',
  borderSecondary: '#4B5563',

  // Status colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#60A5FA',
};
