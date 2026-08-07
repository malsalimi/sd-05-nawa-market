'use client';

import React from 'react';
import { dashboardStats } from '@/data/dashboard';
import { useLanguage } from '@/context/LanguageContext';
import { DashboardCard } from '@/components/DashboardCard';
import { ProductTable } from '@/components/ProductTable';
import { OrderTable } from '@/components/OrderTable';
import { ChartCard } from '@/components/ChartCard';
import { SectionTitle } from '@/components/SectionTitle';
import { Package, ShoppingBag, DollarSign, Users, ShieldAlert } from 'lucide-react';

export default function AdminDashboardPage() {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-4 text-white flex items-center justify-between border border-slate-700 shadow-md">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs font-semibold text-slate-300">
            {language === 'ar'
              ? 'لوحة الإدارة للعرض التوضيحي فقط - جميع البيانات المعروضة هي بيانات افتراضية لأغراض البورتفوليو.'
              : 'Admin dashboard demo UI - All metrics and records are fictional for portfolio purposes.'}
          </span>
        </div>
      </div>

      <SectionTitle
        title={t('admin.title')}
        subtitle={t('admin.subtitle')}
      />

      {/* Statistics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title={t('admin.totalProducts')}
          value={dashboardStats.totalProducts}
          change="12%"
          icon={Package}
        />
        <DashboardCard
          title={t('admin.totalOrders')}
          value={dashboardStats.totalOrders}
          change="18%"
          icon={ShoppingBag}
        />
        <DashboardCard
          title={t('admin.revenue')}
          value={`$${dashboardStats.revenue.toLocaleString()}`}
          change="24%"
          icon={DollarSign}
        />
        <DashboardCard
          title={t('admin.customers')}
          value={dashboardStats.customersCount}
          change="8%"
          icon={Users}
        />
      </div>

      {/* Analytics Charts */}
      <section>
        <ChartCard />
      </section>

      {/* Tables Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6">
          <ProductTable />
        </div>
        <div className="lg:col-span-6">
          <OrderTable />
        </div>
      </div>

    </div>
  );
}
