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

  // Rose colors (adjusted for dark)
  rose50: '#881337',
  rose100: '#9F1239',
  rose200: '#BE123C',
  rose300: '#E11D48',
  rose400: '#F43F5E',
  rose500: '#FB7185',
  rose600: '#FDA4AF',
  rose700: '#FECDD3',
  rose800: '#FFE4E6',
  rose900: '#FFF1F2',

  // Teal colors (adjusted for dark)
  teal50: '#134E4A',
  teal100: '#115E59',
  teal200: '#0F766E',
  teal300: '#0D9488',
  teal400: '#14B8A6',
  teal500: '#2DD4BF',
  teal600: '#5EEAD4',
  teal700: '#99F6E4',
  teal800: '#CCFBF1',
  teal900: '#F0FDFA',

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
