'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import arLocale from '@/locales/ar.json';
import enLocale from '@/locales/en.json';

type Language = 'ar' | 'en';
type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  switchLanguage: (lang: Language) => void;
  t: (keyPath: string) => string;
}

const translations: Record<Language, any> = {
  ar: arLocale,
  en: enLocale
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    const savedLang = localStorage.getItem('nawa_lang') as Language;
    if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    localStorage.setItem('nawa_lang', language);
  }, [language]);

  const switchLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const t = (keyPath: string): string => {
    const keys = keyPath.split('.');
    let current: any = translations[language];

    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to key itself if translation missing
        return keyPath;
      }
    }

    return typeof current === 'string' ? current : keyPath;
  };

  const direction = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, direction, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
