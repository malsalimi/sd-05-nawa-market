'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { products, Product } from '@/data/products';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { FilterPanel } from '@/components/FilterPanel';
import { SectionTitle } from '@/components/SectionTitle';
import { SlidersHorizontal } from 'lucide-react';

function ShopContent() {
  const { t, language } = useLanguage();
  const searchParams = useSearchParams();

  const initialCat = searchParams.get('category') || 'all';
  const initialQuery = searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [maxPrice, setMaxPrice] = useState(200);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState<'featured' | 'priceLow' | 'priceHigh' | 'rating' | 'newest'>('featured');

  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      // Category Filter
      if (selectedCategory !== 'all' && prod.category !== selectedCategory) {
        return false;
      }
      // Price Filter
      if (prod.price > maxPrice) {
        return false;
      }
      // Rating Filter
      if (selectedRating > 0 && prod.rating < selectedRating) {
        return false;
      }
      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const name = (language === 'ar' ? prod.nameAr : prod.nameEn).toLowerCase();
        const desc = (language === 'ar' ? prod.descriptionAr : prod.descriptionEn).toLowerCase();
        if (!name.includes(query) && !desc.includes(query) && !prod.category.includes(query)) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'priceLow') return a.price - b.price;
      if (sortBy === 'priceHigh') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, maxPrice, selectedRating, searchQuery, sortBy, language]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setMaxPrice(200);
    setSelectedRating(0);
    setSortBy('featured');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <SectionTitle
        title={t('shop.title')}
        subtitle={t('shop.subtitle')}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Filter Sidebar */}
        <aside className="lg:col-span-3">
          <FilterPanel
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            maxPrice={maxPrice}
            onMaxPriceChange={setMaxPrice}
            selectedRating={selectedRating}
            onRatingChange={setSelectedRating}
            onReset={handleResetFilters}
          />
        </aside>

        {/* Main Content Area */}
        <main className="lg:col-span-9 space-y-6">
          
          {/* Top Control Bar */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="w-full sm:w-72">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
              <span className="text-xs text-slate-500 font-semibold">
                {filteredProducts.length} {language === 'ar' ? 'منتج' : 'Items'}
              </span>

              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-slate-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl py-2 px-3 focus:outline-none focus:border-emerald-600 font-semibold"
                >
                  <option value="featured">{t('shop.sortFeatured')}</option>
                  <option value="priceLow">{t('shop.sortPriceLow')}</option>
                  <option value="priceHigh">{t('shop.sortPriceHigh')}</option>
                  <option value="rating">{t('shop.sortRating')}</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid or Empty State */}
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
              <p className="text-slate-500 text-base font-medium">
                {t('shop.noProductsFound')}
              </p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all"
              >
                {t('shop.clearFilters')}
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
