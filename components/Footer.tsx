'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ShoppingBag, Mail, Phone, MapPin, Send, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-md">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">
                {language === 'ar' ? 'سوق نواة الإلكتروني' : 'Nawa Market'}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>{t('footer.salimiCollection')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base border-b border-slate-800 pb-2">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-emerald-400 transition-colors">
                  {t('nav.shop')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-emerald-400 transition-colors">
                  {t('nav.admin')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (Demo) */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base border-b border-slate-800 pb-2">
              {t('contact.title')}
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>contact@nawamarket-demo.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span dir="ltr">+0000000000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Digital City, Demo Location</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base border-b border-slate-800 pb-2">
              {t('footer.newsletterTitle')}
            </h3>
            <p className="text-sm text-slate-400">
              {t('footer.newsletterSub')}
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <input
                type="email"
                placeholder="example@demo.com"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2 px-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-lg transition-colors shrink-0"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar & Portfolio Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center md:text-start">
            <p>© {new Date().getFullYear()} {t('brand.name')}. {t('footer.rights')}</p>
            <p className="mt-1 text-slate-400 font-medium">
              {t('footer.demoDisclaimer')}
            </p>
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Created for portfolio by</span>
            <span className="font-semibold text-emerald-400">Salimi Tech</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
