import React from 'react';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

export const KPICard = ({ title, value, trend, isPositive = true, icon: Icon, subtitle = "vs last month" }) => {
  return (
    <div className="gb-card p-5 hover:border-indigo-200 transition-all">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</span>
        {Icon && (
          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>
      
      <div className="mt-3 flex items-baseline justify-between">
        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{value}</h3>
      </div>

      <div className="mt-2 flex items-center gap-1.5 text-xs">
        <span className={`inline-flex items-center font-semibold px-1.5 py-0.5 rounded ${
          isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
        }`}>
          {isPositive ? <FiTrendingUp className="mr-1 w-3 h-3" /> : <FiTrendingDown className="mr-1 w-3 h-3" />}
          {trend}
        </span>
        <span className="text-gray-400">{subtitle}</span>
      </div>
    </div>
  );
};
