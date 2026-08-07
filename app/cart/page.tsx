'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { CartItemRow } from '@/components/CartItem';
import { SectionTitle } from '@/components/SectionTitle';
import { ShoppingBag, ArrowRight, ArrowLeft, Tag, ShieldCheck, Check } from 'lucide-react';

export default function CartPage() {
  const { cart, subtotal, clearCart } = useCart();
  const { t, language } = useLanguage();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim() && !promoApplied) {
      setDiscount(15); // 15% demo discount
      setPromoApplied(true);
    }
  };

  const estimatedTax = Math.round(subtotal * 0.05);
  const discountAmount = Math.round((subtotal * discount) / 100);
  const grandTotal = Math.max(0, subtotal + estimatedTax - discountAmount);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">{t('cart.empty')}</h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto">{t('cart.emptySub')}</p>
        </div>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm transition-all shadow-md"
        >
          <span>{t('cart.continueShopping')}</span>
          <ArrowIcon className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <SectionTitle title={t('cart.title')} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Cart Item List */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between pb-2">
            <span className="text-xs font-bold uppercase text-slate-400">
              {cart.length} {t('cart.title')}
            </span>
            <button
              onClick={clearCart}
              className="text-xs font-semibold text-rose-600 hover:underline"
            >
              {language === 'ar' ? 'تفريغ السلة' : 'Clear Cart'}
            </button>
          </div>

          <div className="space-y-3">
            {cart.map((item) => (
              <CartItemRow key={item.product.id} item={item} />
            ))}
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          <h3 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-3">
            {t('cart.summary')}
          </h3>

          {/* Price Breakdown */}
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>{t('cart.subtotal')}</span>
              <span className="font-bold text-slate-900">${subtotal}</span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-emerald-600 font-semibold">
                <span>خصم الترويج ({discount}%)</span>
                <span>-${discountAmount}</span>
              </div>
            )}

            <div className="flex justify-between text-slate-600">
              <span>{t('cart.shipping')}</span>
              <span className="font-bold text-emerald-600">{t('cart.free')}</span>
            </div>

            <div className="flex justify-between text-slate-600">
              <span>{t('cart.tax')}</span>
              <span className="font-bold text-slate-900">${estimatedTax}</span>
            </div>

            <div className="border-t border-slate-200 pt-3 flex justify-between text-base font-black text-slate-900">
              <span>{t('cart.total')}</span>
              <span className="text-xl text-emerald-600">${grandTotal}</span>
            </div>
          </div>

          {/* Promo Code Input Form */}
          <form onSubmit={handleApplyPromo} className="space-y-2 pt-2">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder={t('cart.promoCode')}
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 uppercase"
                />
                <Tag className="w-3.5 h-3.5 text-slate-400 absolute ltr:right-3 rtl:left-3 top-1/2 -translate-y-1/2" />
              </div>
              <button
                type="submit"
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2 px-4 rounded-xl transition-colors"
              >
                {t('cart.applyPromo')}
              </button>
            </div>
            {promoApplied && (
              <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>تم تطبيق كود الخصم التجريبي بنجاح!</span>
              </p>
            )}
          </form>

          {/* Checkout Button */}
          <Link
            href="/checkout"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
          >
            <span>{t('cart.proceedToCheckout')}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>

          <div className="text-center pt-2 flex items-center justify-center gap-1.5 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{t('cart.demoNotice')}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
