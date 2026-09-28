import React from 'react';
import { DataQuality } from '../components/data/DataQuality';

export const DatasetDetails = () => {
  const sampleData = [
    { id: 'TX-1001', date: '2026-09-01', region: 'North America', category: 'Enterprise Cloud', amount: '$42,500', churn_risk: 'Low' },
    { id: 'TX-1002', date: '2026-09-02', region: 'EMEA', category: 'SaaS Subscriptions', amount: '$12,800', churn_risk: 'Medium' },
    { id: 'TX-1003', date: '2026-09-02', region: 'APAC', category: 'Professional Services', amount: '$8,400', churn_risk: 'Low' },
    { id: 'TX-1004', date: '2026-09-03', region: 'North America', category: 'API Usage', amount: '$3,200', churn_risk: 'Low' },
    { id: 'TX-1005', date: '2026-09-04', region: 'LATAM', category: 'SaaS Subscriptions', amount: '$15,600', churn_risk: 'High' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dataset: Q3_Sales_Performance.csv</h1>
        <p className="text-sm text-gray-500">14,892 records • 18 features • Fully audited</p>
      </div>

      <DataQuality score={98.4} missing={0.4} duplicates={0.1} invalid={1.1} />

      <div className="gb-card p-6">
        <h3 className="text-base font-bold text-gray-900 mb-4">Data Preview (First 5 Rows)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-gray-50 uppercase text-[10px] text-gray-500 font-bold border-b border-gray-200">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Date</th>
                <th className="p-3">Region</th>
                <th className="p-3">Category</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Churn Risk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sampleData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="p-3 font-mono text-gray-900 font-bold">{row.id}</td>
                  <td className="p-3">{row.date}</td>
                  <td className="p-3">{row.region}</td>
                  <td className="p-3 font-medium">{row.category}</td>
                  <td className="p-3 font-bold text-indigo-600">{row.amount}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      row.churn_risk === 'High' ? 'bg-red-50 text-red-700' :
                      row.churn_risk === 'Medium' ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'
                    }`}>{row.churn_risk}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DatasetDetails;
