import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Alex Mercer',
    role: 'Lead Data Strategist',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    email: 'alex.mercer@glassbox.ai'
  });

  const [activeDataset, setActiveDataset] = useState('Q3_Sales_Performance.csv');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'AI Anomaly Detected', desc: 'Enterprise SaaS revenue spike (+24%) in EMEA region.', time: '10m ago', unread: true },
    { id: 2, title: 'Model Re-trained', desc: 'Prediction Agent V3 achieves 94.2% accuracy.', time: '1h ago', unread: true },
    { id: 3, title: 'Data Quality Alert', desc: 'Customer_churn.json missing 2.1% rows in column churn_risk.', time: '3h ago', unread: false },
  ]);

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      activeDataset,
      setActiveDataset,
      sidebarCollapsed,
      setSidebarCollapsed,
      toggleSidebar,
      notifications,
      setNotifications
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
