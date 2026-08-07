'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Category } from '@/data/categories';
import { useLanguage } from '@/context/LanguageContext';
import { Smartphone, Shirt, Home, Watch, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

const iconMap: Record<string, any> = {
  Smartphone,
  Shirt,
  Home,
  Watch,
  Sparkles
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { language, t } = useLanguage();
  const IconComponent = iconMap[category.iconName] || Smartphone;

  const categoryName = language === 'ar' ? category.nameAr : category.nameEn;
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={`/shop?category=${category.id}`}
        className="group relative h-64 rounded-2xl overflow-hidden block border border-slate-200/60 shadow-xs hover:shadow-xl transition-all duration-300"
      >
        {/* Background Image */}
        <img
          src={category.image}
          alt={categoryName}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

        {/* Category Info */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-emerald-600 transition-colors">
              <IconComponent className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900/60 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
              {category.count} {t('categories.itemCount')}
            </span>
          </div>

          <div>
            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              {categoryName}
            </h3>
            <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
              {language === 'ar' ? category.descriptionAr : category.descriptionEn}
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-emerald-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
              <span>{t('hero.exploreCategories')}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
