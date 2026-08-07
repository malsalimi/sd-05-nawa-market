'use client';

import React, { useState } from 'react';
import { mockUser } from '@/data/users';
import { mockOrders } from '@/data/orders';
import { useWishlist } from '@/context/WishlistContext';
import { useLanguage } from '@/context/LanguageContext';
import { ProductCard } from '@/components/ProductCard';
import { SectionTitle } from '@/components/SectionTitle';
import { User, ShoppingBag, Heart, Calendar, MapPin, Mail, Phone, ShieldCheck, CheckCircle2, Clock, Truck } from 'lucide-react';

export default function AccountPage() {
  const { t, language } = useLanguage();
  const { wishlist } = useWishlist();
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'wishlist'>('profile');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'delivered':
        return (
          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-bold text-xs">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{t('account.delivered')}</span>
          </span>
        );
      case 'shipped':
        return (
          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold text-xs">
            <Truck className="w-3.5 h-3.5" />
            <span>{t('account.shipped')}</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-bold text-xs">
            <Clock className="w-3.5 h-3.5" />
            <span>{t('account.processing')}</span>
          </span>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center gap-6 border border-slate-800">
        <img
          src={mockUser.avatar}
          alt={mockUser.name}
          className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-500 shadow-md shrink-0"
        />
        <div className="space-y-1 text-center sm:text-start flex-1">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              {t('account.welcome')} {mockUser.name}
            </h1>
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="text-xs text-slate-400">
            {mockUser.email} • عضو منذ {mockUser.memberSince}
          </p>
        </div>
        <div className="flex gap-4 border-t sm:border-t-0 sm:border-l border-slate-700 pt-4 sm:pt-0 ltr:sm:pl-6 rtl:sm:pr-6">
          <div className="text-center">
            <span className="block text-2xl font-black text-emerald-400">{mockUser.ordersCount}</span>
            <span className="text-[11px] text-slate-400">{t('admin.totalOrders')}</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-black text-emerald-400">${mockUser.totalSpent}</span>
            <span className="text-[11px] text-slate-400">المشتريات</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveTab('profile')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
            activeTab === 'profile'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <User className="w-4 h-4" />
          <span>{t('account.profileTab')}</span>
        </button>

        <button
          onClick={() => setActiveTab('orders')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
            activeTab === 'orders'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>{t('account.ordersTab')}</span>
        </button>

        <button
          onClick={() => setActiveTab('wishlist')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
            activeTab === 'wishlist'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Heart className="w-4 h-4" />
          <span>{t('account.wishlistTab')} ({wishlist.length})</span>
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'profile' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <h3 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-3">
            {t('account.personalInfo')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <User className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-slate-400">الاسم</span>
                <span className="font-bold text-slate-900">{mockUser.name}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-slate-400">البريد الإلكتروني</span>
                <span className="font-bold text-slate-900">{mockUser.email}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-slate-400">رقم الهاتف</span>
                <span className="font-bold text-slate-900" dir="ltr">{mockUser.phone}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-slate-400">العنوان</span>
                <span className="font-bold text-slate-900">{mockUser.address}، {mockUser.city}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="space-y-4">
          {mockOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="font-mono font-black text-slate-900 text-base">{order.id}</span>
                  {getStatusBadge(order.status)}
                </div>
                <span className="text-xs text-slate-400 font-semibold">{order.date}</span>
              </div>

              <div className="space-y-2">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt="" className="w-8 h-8 rounded-lg object-cover bg-slate-100" />
                      <span className="font-bold text-slate-800">
                        {language === 'ar' ? item.productNameAr : item.productNameEn} (x{item.quantity})
                      </span>
                    </div>
                    <span className="font-extrabold text-slate-900">${item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-sm">
                <span className="font-bold text-slate-600">{t('cart.total')}</span>
                <span className="text-lg font-black text-emerald-600">${order.total}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'wishlist' && (
        <div>
          {wishlist.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlist.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 font-medium">
              قائمة المفضلة فارغة حالياً.
            </div>
          )}
        </div>
      )}

    </div>
  );
}
