import React from 'react';
import { FiDatabase, FiMoreVertical, FiArrowRight, FiCheckCircle, FiClock } from 'react-icons/fi';
import { Button } from '../common/Button';

export const DatasetCard = ({ 
  name = "Q3_Sales_Performance.csv",
  type = "CSV",
  rows = "14,892",
  cols = "18",
  status = "Processed",
  lastUpdated = "2 hours ago",
  onView,
  onAnalyze
}) => {
  return (
    <div className="gb-card p-5 hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0">
              <FiDatabase className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 truncate max-w-[180px]" title={name}>{name}</h4>
              <span className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">{type}</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            <FiCheckCircle className="w-3 h-3" /> {status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 my-4 p-3 bg-gray-50 rounded-lg text-xs">
          <div>
            <span className="text-gray-400 block text-[10px] uppercase font-semibold">Row Count</span>
            <span className="font-bold text-gray-800">{rows}</span>
          </div>
          <div>
            <span className="text-gray-400 block text-[10px] uppercase font-semibold">Columns</span>
            <span className="font-bold text-gray-800">{cols} fields</span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between text-[11px] text-gray-400 mb-3">
          <span className="flex items-center gap-1"><FiClock className="w-3 h-3" /> {lastUpdated}</span>
          <span>Quality: <strong className="text-indigo-600">98.4%</strong></span>
        </div>

        <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
          <Button variant="secondary" size="sm" className="flex-1" onClick={onView}>View</Button>
          <Button variant="primary" size="sm" className="flex-1" icon={FiArrowRight} onClick={onAnalyze}>Analyze</Button>
        </div>
      </div>
    </div>
  );
};
