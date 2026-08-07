'use client';

import React from 'react';
import { mockOrders } from '@/data/orders';
import { useLanguage } from '@/context/LanguageContext';
import { ShoppingBag, Clock, Truck, CheckCircle2 } from 'lucide-react';

export const OrderTable: React.FC = () => {
  const { language, t } = useLanguage();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'delivered':
        return (
          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-bold text-[11px]">
            <CheckCircle2 className="w-3 h-3" />
            <span>{t('account.delivered')}</span>
          </span>
        );
      case 'shipped':
        return (
          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-bold text-[11px]">
            <Truck className="w-3 h-3" />
            <span>{t('account.shipped')}</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full font-bold text-[11px]">
            <Clock className="w-3 h-3" />
            <span>{t('account.processing')}</span>
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-emerald-600" />
          <h3 className="font-bold text-slate-900 text-base">
            {t('admin.ordersTable')}
          </h3>
        </div>
        <span className="text-xs text-slate-400 font-semibold">
          {mockOrders.length} {t('account.ordersTab')}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-start text-xs">
          <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200 uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4 text-start">{t('admin.orderId')}</th>
              <th className="py-3 px-4 text-start">{t('admin.customer')}</th>
              <th className="py-3 px-4 text-start">{t('admin.status')}</th>
              <th className="py-3 px-4 text-start">{t('admin.amount')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {mockOrders.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-mono font-bold text-emerald-600">
                  {order.id}
                </td>
                <td className="py-3 px-4 text-slate-900 font-semibold">
                  <div>{order.customerName}</div>
                  <div className="text-[10px] text-slate-400 font-normal">{order.customerEmail}</div>
                </td>
                <td className="py-3 px-4">
                  {getStatusBadge(order.status)}
                </td>
                <td className="py-3 px-4 font-extrabold text-slate-900">
                  ${order.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
