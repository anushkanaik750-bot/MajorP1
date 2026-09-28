import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

export const CategoryChart = ({ data = [] }) => {
  return (
    <div className="gb-card p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-base font-bold text-gray-900">Sales by Category</h3>
        <p className="text-xs text-gray-500">Distribution of revenue across core segments</p>
      </div>
      <div className="h-48 my-2 w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={55}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#111827', borderRadius: '8px', border: 'none', color: '#FFF', fontSize: '12px' }}
              formatter={(val) => [`${val}%`, 'Share']}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between p-1.5 rounded bg-gray-50">
            <span className="flex items-center gap-1.5 font-medium text-gray-700 truncate">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }}></span>
              {item.name}
            </span>
            <span className="font-bold text-gray-900">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};
