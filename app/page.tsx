'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { reviews } from '@/data/reviews';
import { HeroSection } from '@/components/HeroSection';
import { CategoryCard } from '@/components/CategoryCard';
import { ProductGrid } from '@/components/ProductGrid';
import { SectionTitle } from '@/components/SectionTitle';
import { ShieldCheck, Award, Zap, HeartHandshake, Star, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

export default function HomePage() {
  const { t, language } = useLanguage();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  const featuredProducts = products.filter((p) => p.isFeatured);

  const values = [
    {
      icon: Award,
      title: t('about.quality'),
      desc: t('about.qualityDesc')
    },
    {
      icon: ShieldCheck,
      title: t('about.trust'),
      desc: t('about.trustDesc')
    },
    {
      icon: Zap,
      title: t('about.innovation'),
      desc: t('about.innovationDesc')
    },
    {
      icon: HeartHandshake,
      title: t('about.speed'),
      desc: t('about.speedDesc')
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Categories Section */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('categories.title')}
          subtitle={t('categories.subtitle')}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t('featuredProducts.title')}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {t('featuredProducts.subtitle')}
            </p>
          </div>
          <Link
            href="/shop"
            className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-500 transition-colors"
          >
            <span>{t('nav.shop')}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

        <ProductGrid products={featuredProducts} />
      </section>

      {/* Promotional Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="max-w-xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              {language === 'ar' ? 'عروض خاصة حصرية' : 'Exclusive Marketplace Deals'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              {language === 'ar' ? 'خصم يصل إلى 30% على الإلكترونيات' : 'Up to 30% Off Selected Electronics'}
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              {language === 'ar'
                ? 'استمتع بتجربة تسوق لا مثيل لها مع أرقى المنتجات الفاخرة بأفضل الأسعار.'
                : 'Experience unmatched shopping delight with high-tier technology and gadgets.'}
            </p>
            <div className="pt-2">
              <Link
                href="/shop?category=electronics"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-md"
              >
                <span>{t('hero.shopNow')}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Nawa Market */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('about.valuesTitle')}
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs text-center space-y-3 hover:border-slate-300 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">{v.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('product.reviews')}
          subtitle={language === 'ar' ? 'ماذا يقول عملاؤنا عن تجربة التسوق في سوق نواة' : 'What our customers say about their shopping experience'}
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "{language === 'ar' ? rev.commentAr : rev.commentEn}"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <img
                  src={rev.avatar}
                  alt={rev.authorNameEn}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">
                    {language === 'ar' ? rev.authorNameAr : rev.authorNameEn}
                  </h5>
                  <span className="text-[11px] text-slate-400">{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
