import React from 'react';

export const AgentStatus = ({ agentName = "Prediction Agent", status = "Active", accuracy = "94.2%" }) => {
  return (
    <div className="flex items-center gap-3 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-lg text-xs">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
      </span>
      <span className="font-semibold text-indigo-950">{agentName}</span>
      <span className="text-indigo-400">|</span>
      <span className="text-indigo-700 font-medium">Accuracy: {accuracy}</span>
    </div>
  );
};
