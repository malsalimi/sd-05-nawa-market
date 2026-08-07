'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const { t } = useLanguage();

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('shop.search')}
        className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 ltr:pr-10 rtl:pl-10 text-sm text-slate-800 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 shadow-xs transition-all"
      />
      <Search className="w-4 h-4 text-slate-400 absolute ltr:right-3.5 rtl:left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
};
