'use client';

import React from 'react';
import { dashboardStats } from '@/data/dashboard';
import { useLanguage } from '@/context/LanguageContext';
import { TrendingUp, PieChart } from 'lucide-react';

export const ChartCard: React.FC = () => {
  const { language, t } = useLanguage();

  const maxRevenue = Math.max(...dashboardStats.monthlyRevenue.map((m) => m.amount));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Monthly Revenue Bar Chart */}
      <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-slate-900 text-base">
                {t('admin.chartsTitle')}
              </h3>
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              +24% YOY
            </span>
          </div>

          {/* Visual Bars */}
          <div className="mt-8 flex items-end justify-between gap-2 sm:gap-4 h-48 pt-6 px-2">
            {dashboardStats.monthlyRevenue.map((item, idx) => {
              const heightPercent = Math.round((item.amount / maxRevenue) * 100);
              const monthLabel = language === 'ar' ? item.monthAr : item.monthEn;

              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 group relative">
                  {/* Tooltip */}
                  <div className="absolute -top-8 bg-slate-900 text-white text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-md">
                    ${item.amount.toLocaleString()}
                  </div>

                  {/* Bar */}
                  <div className="w-full bg-slate-100 rounded-t-xl overflow-hidden flex items-end h-full">
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full bg-gradient-to-t from-slate-900 to-emerald-600 group-hover:to-green-500 transition-all rounded-t-xl"
                    />
                  </div>

                  <span className="text-[11px] font-bold text-slate-500 truncate">
                    {monthLabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Category Breakdown Progress Bars */}
      <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <PieChart className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-slate-900 text-base">
              {language === 'ar' ? 'توزيع المبيعات حسب القسم' : 'Sales Distribution by Category'}
            </h3>
          </div>

          <div className="mt-6 space-y-4">
            {dashboardStats.categorySales.map((cat, idx) => {
              const categoryName = language === 'ar' ? cat.categoryAr : cat.categoryEn;
              return (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>{categoryName}</span>
                    <span className="font-extrabold text-slate-900">{cat.percentage}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${cat.percentage}%`, backgroundColor: cat.color }}
                      className="h-full rounded-full transition-all duration-500"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
};
