import { AppThemeColors } from './light-colors.ts';

/**
 * Dark theme colors
 * TypeScript will ensure all properties from lightColors are present
 */
export const darkColors: AppThemeColors = {
  // Base colors
  strongWhite: '#FFFFFF',
  strongBlack: '#000000',

  // Blue colors (adjusted for dark)
  blue50: '#1E3A8A',
  blue100: '#1E40AF',
  blue200: '#1D4ED8',
  blue300: '#2563EB',
  blue400: '#3B82F6',
  blue500: '#60A5FA',
  blue600: '#93C5FD',
  blue700: '#BFDBFE',
  blue800: '#DBEAFE',
  blue900: '#EFF6FF',

  // Gray colors (adjusted for dark)
  gray50: '#111827',
  gray100: '#1F2937',
  gray200: '#374151',
  gray300: '#4B5563',
  gray400: '#6B7280',
  gray500: '#9CA3AF',
  gray600: '#D1D5DB',
  gray700: '#E5E7EB',
  gray800: '#F3F4F6',
  gray900: '#F9FAFB',

  // Background colors
  background: '#111827',
  backgroundSecondary: '#1F2937',
  backgroundTertiary: '#374151',

  // Typography colors
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
