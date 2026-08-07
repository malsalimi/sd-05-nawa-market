'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { products, Product } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { ProductGrid } from '@/components/ProductGrid';
import { SectionTitle } from '@/components/SectionTitle';
import { Star, ShoppingCart, Heart, Check, ArrowLeft, ArrowRight, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const { t, language } = useLanguage();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">المنتج غير موجود / Product Not Found</h2>
        <Link
          href="/shop"
          className="inline-block px-6 py-2.5 bg-emerald-600 text-white rounded-xl font-bold text-sm"
        >
          {t('cart.continueShopping')}
        </Link>
      </div>
    );
  }

  const isLiked = isInWishlist(product.id);
  const productName = language === 'ar' ? product.nameAr : product.nameEn;
  const productDesc = language === 'ar' ? product.descriptionAr : product.descriptionEn;
  const features = language === 'ar' ? product.featuresAr : product.featuresEn;

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Back Button */}
      <div>
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-emerald-600 transition-colors"
        >
          {language === 'ar' ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{t('cart.continueShopping')}</span>
        </button>
      </div>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Image */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-4 shadow-sm overflow-hidden">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100">
            <img
              src={product.image}
              alt={productName}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Right Column: Information & Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                {product.category}
              </span>
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-2.5 rounded-full border transition-all ${
                  isLiked
                    ? 'bg-rose-50 border-rose-200 text-rose-600'
                    : 'bg-white border-slate-200 text-slate-400 hover:text-rose-500'
                }`}
                title="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {productName}
            </h1>

            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-slate-200'
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold text-slate-800 text-sm">{product.rating}</span>
              <span className="text-slate-400 text-xs">({product.reviewsCount} {t('product.reviews')})</span>
            </div>
          </div>

          {/* Price Tag */}
          <div className="flex items-baseline gap-3 border-y border-slate-100 py-4">
            <span className="text-3xl font-black text-slate-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-base text-slate-400 line-through">
                ${product.originalPrice}
              </span>
            )}
            <span className="ltr:ml-auto rtl:mr-auto text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              {t('featuredProducts.inStock')}
            </span>
          </div>

          {/* Product Description */}
          <p className="text-sm text-slate-600 leading-relaxed">
            {productDesc}
          </p>

          {/* Key Features */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-sm">
              {t('product.features')}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Add to Cart Controls */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1.5 w-full sm:w-auto justify-between">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100"
              >
                -
              </button>
              <span className="px-4 font-bold text-slate-900 text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                added
                  ? 'bg-emerald-700 text-white'
                  : 'bg-slate-900 hover:bg-emerald-600 text-white'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>{t('product.addedToCart')}</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  <span>{t('product.addToCart')}</span>
                </>
              )}
            </button>
          </div>

          {/* Perks Bar */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t('hero.freeShipping')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t('hero.securePayment')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <RefreshCw className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>إرجاع مجاني خلال 14 يوماً</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <section className="pt-8 border-t border-slate-200">
          <SectionTitle title={t('product.relatedProducts')} />
          <ProductGrid products={relatedProducts} />
        </section>
      )}
    </div>
  );
}
