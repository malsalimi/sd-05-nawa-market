'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionTitle } from '@/components/SectionTitle';
import { Award, ShieldCheck, Zap, HeartHandshake, Sparkles, Building2 } from 'lucide-react';

export default function AboutPage() {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t('about.quality'),
      desc: t('about.qualityDesc')
    },
    {
      icon: ShieldCheck,
      title: t('about.trust'),
      desc: t('about.trustDesc')
    },
    {
      icon: Zap,
      title: t('about.innovation'),
      desc: t('about.innovationDesc')
    },
    {
      icon: HeartHandshake,
      title: t('about.speed'),
      desc: t('about.speedDesc')
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Title */}
      <SectionTitle
        title={t('about.title')}
        subtitle={t('about.subtitle')}
        centered
      />

      {/* Brand Story Hero Card */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Salimi Digital (SD) Collection</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            {t('about.storyTitle')}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t('about.storyText')}
          </p>
        </div>
      </div>

      {/* Mission & Vision Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">
            01
          </div>
          <h3 className="text-xl font-bold text-slate-900">{t('about.missionTitle')}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{t('about.missionText')}</p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black">
            02
          </div>
          <h3 className="text-xl font-bold text-slate-900">{t('about.visionTitle')}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{t('about.visionText')}</p>
        </div>
      </div>

      {/* Values Section */}
      <section className="space-y-8">
        <SectionTitle title={t('about.valuesTitle')} centered />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">{v.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
