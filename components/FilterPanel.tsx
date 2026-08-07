'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { categories } from '@/data/categories';
import { Filter, Star, RefreshCw } from 'lucide-react';

interface FilterPanelProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  maxPrice: number;
  onMaxPriceChange: (price: number) => void;
  selectedRating: number;
  onRatingChange: (rating: number) => void;
  onReset: () => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  selectedCategory,
  onSelectCategory,
  maxPrice,
  onMaxPriceChange,
  selectedRating,
  onRatingChange,
  onReset
}) => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
          <Filter className="w-4 h-4 text-emerald-600" />
          <span>{t('shop.filterCategory')}</span>
        </div>
        <button
          onClick={onReset}
          className="text-xs text-emerald-600 font-semibold hover:underline flex items-center gap-1"
        >
          <RefreshCw className="w-3 h-3" />
          <span>{t('shop.clearFilters')}</span>
        </button>
      </div>

      {/* Category Filter */}
      <div className="space-y-2">
        <button
          onClick={() => onSelectCategory('all')}
          className={`w-full text-start py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
            selectedCategory === 'all'
              ? 'bg-slate-900 text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          {t('nav.allCategories')}
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`w-full flex items-center justify-between py-2 px-3 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === cat.id
                ? 'bg-emerald-600 text-white font-bold'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>{language === 'ar' ? cat.nameAr : cat.nameEn}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
              selectedCategory === cat.id ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-500'
            }`}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Price Slider Filter */}
      <div className="space-y-3 pt-4 border-t border-slate-100">
        <div className="flex justify-between items-center text-xs font-bold text-slate-800">
          <span>{t('shop.filterPrice')}</span>
          <span className="text-emerald-600 font-extrabold">${maxPrice}</span>
        </div>
        <input
          type="range"
          min="10"
          max="200"
          step="5"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(Number(e.target.value))}
          className="w-full accent-emerald-600 cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-slate-400">
          <span>$10</span>
          <span>$200</span>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="space-y-2 pt-4 border-t border-slate-100">
        <span className="block text-xs font-bold text-slate-800 mb-1">
          {t('shop.filterRating')}
        </span>
        {[5, 4, 3].map((stars) => (
          <button
            key={stars}
            onClick={() => onRatingChange(selectedRating === stars ? 0 : stars)}
            className={`w-full flex items-center justify-between py-1.5 px-3 rounded-xl text-xs transition-all ${
              selectedRating === stars
                ? 'bg-amber-50 text-amber-900 border border-amber-300 font-bold'
                : 'hover:bg-slate-50 text-slate-700'
            }`}
          >
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < stars ? 'text-amber-400 fill-amber-400' : 'text-slate-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] text-slate-500">
              {stars} {language === 'ar' ? 'فما فوق' : '& up'}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
