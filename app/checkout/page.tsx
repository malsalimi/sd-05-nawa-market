'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { SectionTitle } from '@/components/SectionTitle';
import { CreditCard, Truck, Apple, ShieldCheck, CheckCircle2, ShoppingBag } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, subtotal, clearCart } = useCart();
  const { t, language } = useLanguage();
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cod' | 'apple'>('card');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [shippingInfo, setShippingInfo] = useState({
    fullName: 'طارق الأحمد (Demo)',
    email: 'tariq.demo@example.com',
    address: 'شارع الملك فهد، حي الصحافة',
    city: 'الرياض',
    postalCode: '12345',
    phone: '+966 50 123 4567'
  });

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  const estimatedTax = Math.round(subtotal * 0.05);
  const grandTotal = subtotal > 0 ? subtotal + estimatedTax : 0;

  if (orderPlaced) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-600/20">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900">
            {t('checkout.successTitle')}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            {t('checkout.successDesc')}
          </p>
          <div className="inline-block bg-slate-100 text-slate-700 text-xs font-mono font-bold px-3 py-1.5 rounded-lg border border-slate-200 mt-2">
            رقم الطلب التجريبي: NW-2026-DEMO
          </div>
        </div>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm transition-all shadow-md"
          >
            <span>{t('checkout.backHome')}</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <SectionTitle
        title={t('checkout.title')}
        subtitle={t('checkout.subtitle')}
      />

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Forms */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Shipping Address Form */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-3">
              {t('checkout.shippingDetails')}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t('checkout.fullName')}
                </label>
                <input
                  type="text"
                  required
                  value={shippingInfo.fullName}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, fullName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t('checkout.email')}
                </label>
                <input
                  type="email"
                  required
                  value={shippingInfo.email}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {t('checkout.address')}
              </label>
              <input
                type="text"
                required
                value={shippingInfo.address}
                onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t('checkout.city')}
                </label>
                <input
                  type="text"
                  required
                  value={shippingInfo.city}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t('checkout.postalCode')}
                </label>
                <input
                  type="text"
                  required
                  value={shippingInfo.postalCode}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, postalCode: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t('checkout.phone')}
                </label>
                <input
                  type="text"
                  required
                  value={shippingInfo.phone}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-3">
              {t('checkout.paymentMethod')}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-4 rounded-2xl border text-start flex flex-col justify-between h-28 transition-all ${
                  paymentMethod === 'card'
                    ? 'border-emerald-600 bg-emerald-50/50 text-slate-900 font-bold'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <CreditCard className={`w-6 h-6 ${paymentMethod === 'card' ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span className="text-xs font-bold">{t('checkout.creditCard')}</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('cod')}
                className={`p-4 rounded-2xl border text-start flex flex-col justify-between h-28 transition-all ${
                  paymentMethod === 'cod'
                    ? 'border-emerald-600 bg-emerald-50/50 text-slate-900 font-bold'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Truck className={`w-6 h-6 ${paymentMethod === 'cod' ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span className="text-xs font-bold">{t('checkout.cashOnDelivery')}</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('apple')}
                className={`p-4 rounded-2xl border text-start flex flex-col justify-between h-28 transition-all ${
                  paymentMethod === 'apple'
                    ? 'border-emerald-600 bg-emerald-50/50 text-slate-900 font-bold'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Apple className={`w-6 h-6 ${paymentMethod === 'apple' ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span className="text-xs font-bold">{t('checkout.applePay')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary & Place Order */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          <h3 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-3">
            {t('cart.summary')}
          </h3>

          <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
            {cart.map((item) => (
              <div key={item.product.id} className="flex items-center justify-between text-xs py-1">
                <span className="text-slate-800 font-medium line-clamp-1 flex-1 ltr:mr-2 rtl:ml-2">
                  {language === 'ar' ? item.product.nameAr : item.product.nameEn} (x{item.quantity})
                </span>
                <span className="font-bold text-slate-900">${item.product.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-3 space-y-2 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>{t('cart.subtotal')}</span>
              <span className="font-bold text-slate-900">${subtotal}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>{t('cart.tax')}</span>
              <span className="font-bold text-slate-900">${estimatedTax}</span>
            </div>
            <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-100">
              <span>{t('cart.total')}</span>
              <span className="text-xl text-emerald-600">${grandTotal}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md text-sm"
          >
            {t('checkout.placeOrder')}
          </button>

          <div className="text-center pt-2 flex items-center justify-center gap-1.5 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{t('checkout.demoNotice')}</span>
          </div>
        </div>

      </form>
    </div>
  );
}
