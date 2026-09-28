import React from 'react';
import { FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';

export const DataQuality = ({ score = 98.4, missing = 0.4, duplicates = 0.1, invalid = 1.1 }) => {
  return (
    <div className="gb-card p-6">
      <h3 className="text-base font-bold text-gray-900 mb-1">Data Quality & Health Index</h3>
      <p className="text-xs text-gray-500 mb-6">Automated integrity audit performed by Data Quality Sentinel Agent</p>

      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Quality Score Ring */}
        <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-gray-100"
              strokeWidth="3.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-indigo-600"
              strokeDasharray={`${score}, 100`}
              strokeWidth="3.5"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-xl font-extrabold text-gray-900">{score}%</span>
            <span className="text-[10px] text-gray-400 font-semibold uppercase">Overall</span>
          </div>
        </div>

        {/* Audit Metrics Breakdown */}
        <div className="flex-1 w-full space-y-3">
          <div>
            <div className="flex justify-between text-xs font-medium mb-1">
              <span className="text-gray-600">Missing Values</span>
              <span className="text-emerald-600 font-bold">{missing}%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500" style={{ width: `${100 - missing}%` }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium mb-1">
              <span className="text-gray-600">Duplicate Rows</span>
              <span className="text-emerald-600 font-bold">{duplicates}%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500" style={{ width: `${100 - duplicates}%` }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium mb-1">
              <span className="text-gray-600">Invalid Data Types</span>
              <span className="text-amber-600 font-bold">{invalid}%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500" style={{ width: `${100 - invalid}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
