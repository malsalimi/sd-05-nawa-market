'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Send, CheckCircle2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
      {submitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            {t('contact.sentSuccess')}
          </h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              {t('contact.nameLabel')}
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              {t('contact.emailLabel')}
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              {t('contact.messageLabel')}
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-emerald-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md shadow-emerald-950/20 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>{t('contact.sendButton')}</span>
          </button>
        </form>
      )}
    </div>
  );
};
