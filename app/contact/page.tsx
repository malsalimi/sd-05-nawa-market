'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionTitle } from '@/components/SectionTitle';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SectionTitle
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        centered
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl space-y-6 border border-slate-800">
            <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
              {t('contact.title')}
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-slate-400">{t('contact.email')}</span>
                  <span className="font-bold text-white">contact@nawamarket-demo.com</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-slate-400">{t('contact.phone')}</span>
                  <span className="font-bold text-white" dir="ltr">+0000000000</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-slate-400">{t('contact.address')}</span>
                  <span className="font-bold text-white">Digital City, Demo Location</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>مشروع تجريبي لأغراض معرض الأعمال.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
