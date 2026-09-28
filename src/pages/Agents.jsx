import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AgentCard } from '../components/agents/AgentCard';
import { FiTrendingUp, FiPieChart, FiCheckSquare, FiCpu } from 'react-icons/fi';

export const Agents = () => {
  const navigate = useNavigate();

  const agents = [
    {
      id: 'analyst',
      name: 'Data Analyst Agent',
      description: 'Explores raw datasets, calculates descriptive statistics, and detects anomalies automatically.',
      status: 'Ready',
      icon: FiCpu
    },
    {
      id: 'prediction',
      name: 'Prediction Agent',
      description: 'Builds horizon forecasts for revenue, churn, and product demand with confidence intervals.',
      status: 'Ready',
      icon: FiTrendingUp
    },
    {
      id: 'visualization',
      name: 'Visualization Agent',
      description: 'Generates optimized chart configurations and interactive visual stories from queries.',
      status: 'Ready',
      icon: FiPieChart
    },
    {
      id: 'decision',
      name: 'Decision Support Agent',
      description: 'Formulates actionable prescriptive recommendations with risk and return trade-off metrics.',
      status: 'Ready',
      icon: FiCheckSquare
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">AI Agent Hub</h1>
        <p className="text-sm text-gray-500">Autonomous, explainable agents working in concert on your datasets</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            name={agent.name}
            description={agent.description}
            status={agent.status}
            icon={agent.icon}
            onOpen={() => navigate(`/agents/${agent.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Agents;
