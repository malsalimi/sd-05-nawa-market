'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <button
      onClick={() => switchLanguage(language === 'ar' ? 'en' : 'ar')}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs sm:text-sm transition-all duration-200 border border-slate-200/80 shadow-xs"
      aria-label="Switch Language"
    >
      <Globe className="w-4 h-4 text-emerald-600" />
      <span>{language === 'ar' ? 'English (EN)' : 'العربية (AR)'}</span>
    </button>
  );
};
