'use client';

import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-3 h-1 w-16 bg-emerald-600 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};
