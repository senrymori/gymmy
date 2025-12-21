import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { localizedStrings, Translations } from './localized-strings';
import * as RNLocalize from 'react-native-localize';
import { getStorageValue, setStorageValue, storageKeys } from '@utils/storage-utils';

interface LanguageContextValue {
  translations: Translations;
  setLanguage: (language: string) => void;
  currentLanguage: string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
    // Try to load saved language from storage
    const storedLanguage = getStorageValue(storageKeys.LANGUAGE);
    if (storedLanguage) {
      return storedLanguage;
    }
    // Fallback to device language
    const deviceLanguage = RNLocalize.getLocales()[0]?.languageCode || 'en';
    return deviceLanguage;
  });

  useEffect(() => {
    localizedStrings.setLanguage(currentLanguage);
  }, [currentLanguage]);

  const setLanguage = (language: string) => {
    setCurrentLanguage(language);
    localizedStrings.setLanguage(language);
    setStorageValue(storageKeys.LANGUAGE, language);
  };

  const value: LanguageContextValue = {
    translations: localizedStrings as unknown as Translations,
    setLanguage,
    currentLanguage,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
