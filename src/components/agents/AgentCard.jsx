import React from 'react';
import { FiCpu, FiArrowRight, FiActivity } from 'react-icons/fi';
import { Button } from '../common/Button';

export const AgentCard = ({ 
  name = "Data Analyst Agent",
  description = "Explores raw datasets, calculates descriptive statistics, and detects anomalies automatically.",
  status = "Ready",
  icon: Icon = FiCpu,
  onOpen
}) => {
  const isReady = status === "Ready";

  return (
    <div className="gb-card p-6 flex flex-col justify-between hover:border-indigo-300 hover:shadow-md transition-all">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-indigo-600 flex items-center justify-center font-bold">
            <Icon className="w-5 h-5" />
          </div>
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
            isReady ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
          }`}>
            <span className={`w-2 h-2 rounded-full ${isReady ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></span>
            {status}
          </span>
        </div>

        <h3 className="text-base font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-6">{description}</p>
      </div>

      <Button variant="ai" size="sm" icon={FiArrowRight} className="w-full justify-between" onClick={onOpen}>
        <span>Open Agent</span>
      </Button>
    </div>
  );
};
