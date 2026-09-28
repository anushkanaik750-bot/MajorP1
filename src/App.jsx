import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/layout/Layout';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DataSources from './pages/DataSources';
import DatasetDetails from './pages/DatasetDetails';
import Analytics from './pages/Analytics';
import Predictive from './pages/Predictive';
import Prescriptive from './pages/Prescriptive';
import Agents from './pages/Agents';
import AgentDetails from './pages/AgentDetails';
import EvolutionMatrix from './pages/EvolutionMatrix';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/data" element={<Layout><DataSources /></Layout>} />
          <Route path="/dataset-details" element={<Layout><DatasetDetails /></Layout>} />
          <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
          <Route path="/predictive" element={<Layout><Predictive /></Layout>} />
          <Route path="/prescriptive" element={<Layout><Prescriptive /></Layout>} />
          <Route path="/agents" element={<Layout><Agents /></Layout>} />
          <Route path="/agents/:agentId" element={<Layout><AgentDetails /></Layout>} />
          <Route path="/evolution" element={<Layout><EvolutionMatrix /></Layout>} />
          <Route path="/reports" element={<Layout><Reports /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
