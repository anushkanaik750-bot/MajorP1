import React, { useState } from 'react';
import { FiCheckCircle, FiArrowRight, FiInfo } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

import { Button } from '../common/Button';

export const InsightCard = ({ 
  headline = "Revenue increased by 18.6% this month",
  factors = [
    { factor: "Enterprise Cloud expansion in North America", impact: "+11.2%" },
    { factor: "Reduced customer churn in Q3 renewal cohort", impact: "+4.8%" },
    { factor: "Automated upsells via API Tier upgrades", impact: "+2.6%" },
  ],
  confidence = 94,
  onViewExplanation,
  onAskAgent
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ai-insight-card p-6 rounded-xl relative overflow-hidden transition-all">
      {/* Top Header Badge */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="ai-pill px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-2xs">
            <HiSparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
            GlassBox AI Business Insight
          </span>
          <span className="text-[11px] text-gray-500 font-medium">Explainable Agent Engine</span>
        </div>
        
        {/* Confidence Meter */}
        <div className="flex items-center gap-2 bg-white/80 border border-purple-100 px-3 py-1 rounded-lg">
          <span className="text-xs text-gray-500 font-medium">Confidence Score:</span>
          <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" 
              style={{ width: `${confidence}%` }}
            ></div>
          </div>
          <span className="text-xs font-bold text-indigo-700">{confidence}%</span>
        </div>
      </div>

      {/* Main Headline */}
      <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start gap-2">
        <FiCheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
        <span>{headline}</span>
      </h2>


      {/* Why did this happen? (Contributing Factors) */}
      <div className="bg-white/90 border border-purple-100 rounded-lg p-4 mb-4">
        <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
          <FiInfo className="text-indigo-600" />
          WHY DID THIS HAPPEN? (Contributing Factors)
        </h4>
        <div className="space-y-2">
          {factors.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between text-xs sm:text-sm text-gray-700 border-b border-gray-50 pb-1.5 last:border-0 last:pb-0">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                {item.factor}
              </span>
              <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                {item.impact}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2">
          <Button 
            variant="ai" 
            size="sm"
            onClick={onViewExplanation || (() => setShowDetails(!showDetails))}
          >
            {showDetails ? 'Hide Deep Audit' : 'View Explanation'}
          </Button>
          <Button 
            variant="primary" 
            size="sm"
            icon={FiArrowRight}
            onClick={onAskAgent}
          >
            Ask AI Agent →
          </Button>
        </div>

        <span className="text-[11px] text-gray-400 italic">
          Audited by Data Analyst & Prediction Agents
        </span>
      </div>

      {/* Expanded Deep Audit Info when clicked */}
      {showDetails && (
        <div className="mt-4 p-4 bg-indigo-950 text-indigo-100 rounded-lg text-xs space-y-2 animate-fadeIn">
          <div className="font-bold text-indigo-300">GlassBox Causal Traceability Audit:</div>
          <p>• Data source validated: <code className="bg-indigo-900 px-1 py-0.5 rounded text-white">Q3_Sales_Performance.csv</code> (14,892 rows, 0.0% null anomaly)</p>
          <p>• Correlation model: Linear Ridge Regression with Shapley value feature attribution (SHAP score = 0.882).</p>
          <p>• Statistical significance: p &lt; 0.001 against baseline 90-day seasonal expectation.</p>
        </div>
      )}
    </div>
  );
};
