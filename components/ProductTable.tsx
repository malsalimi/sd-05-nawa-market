'use client';

import React, { useState } from 'react';
import { products } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import { Search, CheckCircle, Package } from 'lucide-react';

export const ProductTable: React.FC = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState('');

  const filteredProducts = products.filter((p) => {
    const name = language === 'ar' ? p.nameAr : p.nameEn;
    return name.toLowerCase().includes(filter.toLowerCase()) || p.category.includes(filter.toLowerCase());
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Package className="w-5 h-5 text-emerald-600" />
          <h3 className="font-bold text-slate-900 text-base">
            {t('admin.productsTable')}
          </h3>
        </div>
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder={t('shop.search')}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-1.5 px-3 ltr:pr-8 rtl:pl-8 text-xs text-slate-800 focus:outline-none focus:border-emerald-600"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute ltr:right-2.5 rtl:left-2.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-start text-xs">
          <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200 uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4 text-start">{t('admin.productName')}</th>
              <th className="py-3 px-4 text-start">{t('admin.category')}</th>
              <th className="py-3 px-4 text-start">{t('admin.price')}</th>
              <th className="py-3 px-4 text-start">{t('admin.status')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {filteredProducts.map((product) => {
              const productName = language === 'ar' ? product.nameAr : product.nameEn;
              return (
                <tr key={product.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={productName}
                      className="w-8 h-8 rounded-lg object-cover bg-slate-100 shrink-0"
                    />
                    <span className="font-bold text-slate-900 line-clamp-1">{productName}</span>
                  </td>
                  <td className="py-3 px-4 text-slate-600 uppercase font-semibold">
                    {product.category}
                  </td>
                  <td className="py-3 px-4 font-extrabold text-slate-900">
                    ${product.price}
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-bold text-[11px]">
                      <CheckCircle className="w-3 h-3" />
                      <span>{t('admin.inStock')}</span>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
