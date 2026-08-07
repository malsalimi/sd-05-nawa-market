'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ShoppingBag, ArrowRight, ArrowLeft, ShieldCheck, Truck, Clock, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t, language } = useLanguage();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden py-16 sm:py-24 border-b border-slate-800">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-0 ltr:-left-20 rtl:-right-20 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 ltr:-right-20 rtl:-left-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-center ltr:lg:text-left rtl:lg:text-right"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{language === 'ar' ? 'منصة التسوق العصري الأولى' : 'Premier Modern Marketplace Platform'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              {t('hero.title')}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center ltr:lg:justify-start rtl:lg:justify-start gap-4">
              <Link
                href="/shop"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-base shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <span>{t('hero.shopNow')}</span>
                <ArrowIcon className="w-5 h-5" />
              </Link>

              <Link
                href="/#categories"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-base flex items-center justify-center gap-2 transition-all"
              >
                <span>{t('hero.exploreCategories')}</span>
              </Link>
            </div>

            {/* Key Features Badges */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800/80">
              <div className="flex items-center gap-3 justify-center ltr:lg:justify-start rtl:lg:justify-start text-xs font-medium text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4 text-emerald-400" />
                </div>
                <span>{t('hero.freeShipping')}</span>
              </div>
              <div className="flex items-center gap-3 justify-center ltr:lg:justify-start rtl:lg:justify-start text-xs font-medium text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <span>{t('hero.securePayment')}</span>
              </div>
              <div className="flex items-center gap-3 justify-center ltr:lg:justify-start rtl:lg:justify-start text-xs font-medium text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <span>{t('hero.support')}</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Product Banner Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-gradient-to-b from-slate-800 to-slate-900 p-2">
              <div className="relative h-96 sm:h-[420px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop"
                  alt="Nawa Market Storefront"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Floating Promo Badge */}
                <div className="absolute bottom-6 ltr:left-6 rtl:right-6 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-4 rounded-2xl max-w-xs shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-black text-sm shrink-0">
                      89$
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {language === 'ar' ? 'ساعة نوفا الذكية' : 'Nova Smart Watch'}
                      </h4>
                      <p className="text-xs text-emerald-400 font-semibold mt-0.5">
                        {language === 'ar' ? 'المنتج الأكثر مبيعاً' : 'Best Selling Item'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
