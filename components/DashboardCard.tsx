'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  icon: LucideIcon;
  iconBgColor?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  change,
  isPositive = true,
  icon: Icon,
  iconBgColor = 'bg-slate-900 text-emerald-400'
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex items-center justify-between">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {title}
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
          {value}
        </h3>
        {change && (
          <p className={`text-xs font-semibold mt-2 flex items-center gap-1 ${
            isPositive ? 'text-emerald-600' : 'text-rose-600'
          }`}>
            <span>{isPositive ? '↑' : '↓'} {change}</span>
            <span className="text-slate-400 font-normal">مقارنة بالشهر الماضي</span>
          </p>
        )}
      </div>

      <div className={`w-12 h-12 rounded-2xl ${iconBgColor} flex items-center justify-center shadow-md shrink-0`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  );
};
