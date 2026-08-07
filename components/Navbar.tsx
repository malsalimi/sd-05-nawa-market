'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import {
  ShoppingBag,
  ShoppingCart,
  Heart,
  User,
  Search,
  Menu,
  X,
  ShieldCheck,
  Sparkles,
  LayoutDashboard
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t, language } = useLanguage();
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
  const pathname = usePathname();
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/shop', label: t('nav.shop') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 shadow-md">
      {/* Top Banner Disclaimer */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-xs py-1.5 px-4 text-center text-slate-300 border-b border-emerald-900/40 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
        <span>{t('brand.demoNotice')}</span>
        <span className="hidden sm:inline text-slate-500">|</span>
        <span className="hidden sm:inline text-slate-400">Salimi Digital (SD) Collection</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-600/30 group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                {language === 'ar' ? 'سوق نواة' : 'Nawa Market'}
              </span>
              <span className="text-[10px] text-emerald-400/90 font-medium tracking-wider uppercase">
                {language === 'ar' ? 'منصة تسوق حديثة' : 'Bilingual Marketplace'}
              </span>
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-md relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('nav.searchPlaceholder')}
              className="w-full bg-slate-800/90 border border-slate-700/80 rounded-full py-2 px-4 ltr:pr-10 rtl:pl-10 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
            <button
              type="submit"
              className="absolute ltr:right-3 rtl:left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                    isActive ? 'text-emerald-400 font-semibold border-b-2 border-emerald-500 pb-1' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/admin"
              className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all ${
                pathname === '/admin' ? 'border-emerald-500 text-emerald-400' : ''
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t('nav.admin')}</span>
            </Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            {/* Wishlist Link */}
            <Link
              href="/account"
              className="relative p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
              title={t('nav.wishlist')}
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <Link
              href="/cart"
              className="relative flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-2 rounded-xl text-sm font-semibold transition-all shadow-md shadow-emerald-950/40"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">{t('nav.cart')}</span>
              {totalItems > 0 && (
                <span className="bg-white text-emerald-800 text-xs font-extrabold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Account Link */}
            <Link
              href="/account"
              className="hidden sm:flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
              title={t('nav.account')}
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-4">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('nav.searchPlaceholder')}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2 px-4 ltr:pr-10 rtl:pl-10 text-sm text-white"
            />
            <button type="submit" className="absolute ltr:right-3 rtl:left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <Search className="w-4 h-4" />
            </button>
          </form>

          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                  pathname === link.href ? 'bg-emerald-900/50 text-emerald-400' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 px-3 rounded-lg text-base font-medium text-emerald-400 bg-slate-800"
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>{t('nav.admin')}</span>
            </Link>
            <Link
              href="/account"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 px-3 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800"
            >
              <User className="w-5 h-5" />
              <span>{t('nav.account')}</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
