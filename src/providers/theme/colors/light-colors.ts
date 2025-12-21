/**
 * Light theme colors
 * This is the source of truth for AppThemeColors type
 */
export const lightColors = {
  // Base colors
  strongWhite: '#FFFFFF',
  strongBlack: '#000000',

  // Blue colors
  blue50: '#EFF6FF',
  blue100: '#DBEAFE',
  blue200: '#BFDBFE',
  blue300: '#93C5FD',
  blue400: '#60A5FA',
  blue500: '#3B82F6',
  blue600: '#2563EB',
  blue700: '#1D4ED8',
  blue800: '#1E40AF',
  blue900: '#1E3A8A',

  // Gray colors
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',

  // Rose colors (красно-розовый)
  rose50: '#FFF1F2',
  rose100: '#FFE4E6',
  rose200: '#FECDD3',
  rose300: '#FDA4AF',
  rose400: '#FB7185',
  rose500: '#F43F5E',
  rose600: '#E11D48',
  rose700: '#BE123C',
  rose800: '#9F1239',
  rose900: '#881337',

  // Teal colors (тифони)
  teal50: '#F0FDFA',
  teal100: '#CCFBF1',
  teal200: '#99F6E4',
  teal300: '#5EEAD4',
  teal400: '#2DD4BF',
  teal500: '#14B8A6',
  teal600: '#0D9488',
  teal700: '#0F766E',
  teal800: '#115E59',
  teal900: '#134E4A',

  // Background colors
  background: '#FFFFFF',
  backgroundSecondary: '#F9FAFB',
  backgroundTertiary: '#F3F4F6',

  // Typography colors
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
