import React from 'react';
import { useParams } from 'react-router-dom';
import { AgentChat } from '../components/agents/AgentChat';

export const AgentDetails = () => {
  const { agentId } = useParams();

  const names = {
    analyst: "Data Analyst Agent",
    prediction: "Prediction Agent",
    visualization: "Visualization Agent",
    decision: "Decision Support Agent"
  };

  const agentName = names[agentId] || "GlassBox AI Agent";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{agentName} Workspace</h1>
        <p className="text-sm text-gray-500">Interactive explainable AI chat & task execution</p>
      </div>

      <AgentChat agentName={agentName} />
    </div>
  );
};

export default AgentDetails;
