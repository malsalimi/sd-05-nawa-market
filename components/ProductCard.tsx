'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Star, ShoppingCart, Heart, Check, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [added, setAdded] = React.useState(false);

  const isLiked = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const productName = language === 'ar' ? product.nameAr : product.nameEn;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden relative"
    >
      {/* Product Image Container */}
      <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
        <img
          src={product.image}
          alt={productName}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Featured / Discount Badges */}
        <div className="absolute top-3 ltr:left-3 rtl:right-3 flex flex-col gap-1.5 z-10">
          {product.originalPrice && (
            <span className="bg-rose-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-xs">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          )}
          {product.isFeatured && (
            <span className="bg-emerald-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-xs">
              {language === 'ar' ? 'مميز' : 'Featured'}
            </span>
          )}
        </div>

        {/* Action Overlay Buttons */}
        <div className="absolute top-3 ltr:right-3 rtl:left-3 flex flex-col gap-2 z-10">
          <button
            onClick={handleToggleWishlist}
            className={`p-2 rounded-full backdrop-blur-md shadow-md transition-all ${
              isLiked
                ? 'bg-rose-500 text-white'
                : 'bg-white/80 text-slate-700 hover:bg-white hover:text-rose-500'
            }`}
            aria-label="Wishlist"
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Quick View Link */}
        <Link
          href={`/product/${product.id}`}
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 bg-slate-900/10 backdrop-blur-[2px] transition-opacity flex items-center justify-center"
        >
          <span className="bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" />
            <span>{t('featuredProducts.viewDetails')}</span>
          </span>
        </Link>
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
            <span className="uppercase tracking-wider font-semibold text-emerald-600">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-slate-700">{product.rating}</span>
              <span className="text-slate-400">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <Link href={`/product/${product.id}`} className="block group-hover:text-emerald-600 transition-colors">
            <h3 className="font-bold text-slate-900 text-base line-clamp-1">
              {productName}
            </h3>
          </Link>
        </div>

        {/* Price & Add to Cart Button */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-extrabold text-slate-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs ${
              added
                ? 'bg-emerald-700 text-white'
                : 'bg-slate-900 hover:bg-emerald-600 text-white'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                <span>{language === 'ar' ? 'تمت!' : 'Added!'}</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>{t('featuredProducts.addToCart')}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
