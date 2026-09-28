import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { FiTrendingUp, FiCheckCircle } from 'react-icons/fi';

export const EvolutionMatrix = () => {
  const modelHistory = [
    { version: 'V1.0', accuracy: 82.4, precision: 80.1, recall: 79.5, f1: 79.8 },
    { version: 'V1.5', accuracy: 85.8, precision: 84.2, recall: 83.1, f1: 83.6 },
    { version: 'V2.0', accuracy: 89.2, precision: 88.0, recall: 87.4, f1: 87.7 },
    { version: 'V2.4 (Current)', accuracy: 94.2, precision: 93.6, recall: 92.8, f1: 93.2 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Model Evolution Matrix</h1>
        <p className="text-sm text-gray-500">Track accuracy, precision, and architectural improvements across AI iterations</p>
      </div>

      {/* Flagship Callout */}
      <div className="ai-insight-card p-6 rounded-xl flex items-center justify-between">
        <div>
          <span className="ai-pill px-2.5 py-1 rounded-full text-xs font-bold">Latest Improvement</span>
          <h2 className="text-xl font-bold text-gray-900 mt-2 flex items-center gap-2">
            <FiTrendingUp className="text-emerald-500" />
            +5.0% Accuracy Boost in V2.4 Model
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            Driven by automated feature engineering, SHAP attribution alignment, and hyperparameter tuning on 14,892 transactions.
          </p>
        </div>
        <div className="text-right hidden sm:block">
          <span className="text-3xl font-extrabold text-indigo-700">94.2%</span>
          <span className="text-xs text-gray-500 block">Current Accuracy</span>
        </div>
      </div>

      {/* Chart */}
      <div className="gb-card p-6">
        <h3 className="text-base font-bold text-gray-900 mb-4">Accuracy Progression across Model Versions</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={modelHistory}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
              <XAxis dataKey="version" tick={{ fill: '#6B7280', fontSize: 12 }} />
              <YAxis domain={[75, 100]} tick={{ fill: '#6B7280', fontSize: 12 }} />
              <Tooltip contentStyle={{ backgroundColor: '#111827', borderRadius: '8px', border: 'none', color: '#FFF' }} />
              <Line type="monotone" dataKey="accuracy" stroke="#4F46E5" strokeWidth={3} dot={{ r: 6, fill: '#4F46E5' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table */}
      <div className="gb-card p-6">
        <h3 className="text-base font-bold text-gray-900 mb-4">Model Iteration Benchmark Matrix</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-gray-50 uppercase text-[10px] text-gray-500 font-bold border-b border-gray-200">
              <tr>
                <th className="p-3">Model Version</th>
                <th className="p-3">Accuracy</th>
                <th className="p-3">Precision</th>
                <th className="p-3">Recall</th>
                <th className="p-3">F1 Score</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {modelHistory.map((m) => (
                <tr key={m.version} className={m.version.includes('Current') ? 'bg-purple-50/50 font-bold' : ''}>
                  <td className="p-3 font-mono">{m.version}</td>
                  <td className="p-3 text-indigo-700 font-bold">{m.accuracy}%</td>
                  <td className="p-3">{m.precision}%</td>
                  <td className="p-3">{m.recall}%</td>
                  <td className="p-3">{m.f1}%</td>
                  <td className="p-3">
                    {m.version.includes('Current') ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[10px]">
                        <FiCheckCircle /> Production
                      </span>
                    ) : (
                      <span className="text-gray-400">Archived</span>
                    )}
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

export default EvolutionMatrix;
