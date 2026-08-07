'use client';

import React from 'react';
import Link from 'next/link';
import { CartItem as CartItemType, useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { Trash2, Plus, Minus } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

export const CartItemRow: React.FC<CartItemProps> = ({ item }) => {
  const { language } = useLanguage();
  const { updateQuantity, removeFromCart } = useCart();

  const productName = language === 'ar' ? item.product.nameAr : item.product.nameEn;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white rounded-2xl border border-slate-200 gap-4 shadow-xs">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <img
          src={item.product.image}
          alt={productName}
          className="w-20 h-20 object-cover rounded-xl bg-slate-100 shrink-0"
        />
        <div>
          <Link
            href={`/product/${item.product.id}`}
            className="font-bold text-slate-900 text-sm sm:text-base hover:text-emerald-600 transition-colors line-clamp-1"
          >
            {productName}
          </Link>
          <p className="text-xs text-slate-400 uppercase font-semibold mt-0.5">
            {item.product.category}
          </p>
          <p className="text-sm font-extrabold text-emerald-600 mt-1">
            ${item.product.price}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
        {/* Quantity Selector */}
        <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
          <button
            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
            className="p-1 rounded-lg text-slate-600 hover:bg-white transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-8 text-center text-xs font-bold text-slate-900">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
            className="p-1 rounded-lg text-slate-600 hover:bg-white transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Item Total Price */}
        <span className="text-base font-extrabold text-slate-900 w-20 text-end">
          ${item.product.price * item.quantity}
        </span>

        {/* Remove Item Button */}
        <button
          onClick={() => removeFromCart(item.product.id)}
          className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
          aria-label="Remove item"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
