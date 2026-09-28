import React, { useState } from 'react';
import { InsightCard } from '../components/dashboard/InsightCard';
import { Button } from '../components/common/Button';

export const Analytics = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'descriptive', label: 'Descriptive' },
    { id: 'diagnostic', label: 'Diagnostic' },
    { id: 'predictive', label: 'Predictive' },
    { id: 'prescriptive', label: 'Prescriptive' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics Engine</h1>
        <p className="text-sm text-gray-500">Multi-stage explainable AI analysis pipeline</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 gap-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-2">
        {activeTab === 'overview' && (
          <div className="gb-card p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Overview Analytics</h3>
            <p className="text-xs text-gray-500">Macro view of revenue, customer growth, and regional performance.</p>
          </div>
        )}

        {activeTab === 'descriptive' && (
          <div className="gb-card p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Descriptive Analysis</h3>
            <p className="text-xs text-gray-500">Historical metrics breakdown across all 18 variables.</p>
          </div>
        )}

        {activeTab === 'diagnostic' && (
          <div className="space-y-4">
            <InsightCard 
              headline="Why did EMEA sales surge by 24.2%?"
              factors={[
                { factor: "New enterprise contract signed in Germany", impact: "+14.5%" },
                { factor: "Favorable currency exchange shift", impact: "+5.1%" },
                { factor: "Local marketing campaign rollout", impact: "+4.6%" }
              ]}
              confidence={96}
            />
          </div>
        )}

        {activeTab === 'predictive' && (
          <div className="gb-card p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Predictive Horizon</h3>
            <p className="text-xs text-gray-500">90-day trajectory modeling with 94.2% confidence.</p>
          </div>
        )}

        {activeTab === 'prescriptive' && (
          <div className="gb-card p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Prescriptive Recommendations</h3>
            <p className="text-xs text-gray-500">AI suggested strategic actions to maximize Q4 revenue.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;
