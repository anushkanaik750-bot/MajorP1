import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const RevenueChart = ({ data = [] }) => {
  return (
    <div className="gb-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-gray-900">Revenue Performance</h3>
          <p className="text-xs text-gray-500">Monthly revenue trajectory vs projected benchmark target</p>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span> Actual Revenue</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-200"></span> Target</span>
        </div>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.25}/>
                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} tickFormatter={(val) => `$${val/1000}k`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#111827', borderRadius: '8px', border: 'none', color: '#FFF', fontSize: '12px' }}
              formatter={(val) => [`$${val.toLocaleString()}`, 'Revenue']}
            />
            <Area type="monotone" dataKey="revenue" stroke="#4F46E5" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRev)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
