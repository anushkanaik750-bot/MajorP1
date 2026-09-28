import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FiHome, FiDatabase, FiBarChart2, FiCpu, 
  FiGitCommit, FiFileText, FiSettings, FiX
} from 'react-icons/fi';
import { useApp } from '../../context/AppContext';

export const Sidebar = () => {
  const { sidebarCollapsed, setSidebarCollapsed } = useApp();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: FiHome },
    { name: 'Data Sources', path: '/data', icon: FiDatabase },
    { name: 'Analytics', path: '/analytics', icon: FiBarChart2 },
    { name: 'AI Agents', path: '/agents', icon: FiCpu },
    { name: 'Evolution Matrix', path: '/evolution', icon: FiGitCommit },
    { name: 'Reports', path: '/reports', icon: FiFileText },
    { name: 'Settings', path: '/settings', icon: FiSettings },
  ];

  return (
    <>
      {/* Desktop & Mobile Sidebar */}
      <aside className={`
        bg-gray-900 text-white flex flex-col transition-all duration-300 z-40 border-r border-gray-800
        fixed md:sticky top-0 h-screen shrink-0
        ${sidebarCollapsed ? '-translate-x-full md:translate-x-0 md:w-20' : 'translate-x-0 w-64'}
      `}>
        {/* Brand Header */}
        <div className="h-16 px-5 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-black text-white text-lg shadow-md shrink-0">
              G
            </div>
            {(!sidebarCollapsed || window.innerWidth < 768) && (
              <div className="overflow-hidden whitespace-nowrap">
                <h1 className="font-bold text-base tracking-tight text-white flex items-center gap-1.5">
                  GlassBox <span className="text-xs px-1.5 py-0.5 rounded bg-indigo-500/30 text-indigo-300 border border-indigo-400/20 font-medium">BI</span>
                </h1>
                <p className="text-[11px] text-gray-400 truncate">Explainable Intelligence</p>
              </div>
            )}
          </div>
          {/* Mobile Close Button */}
          <button 
            onClick={() => setSidebarCollapsed(true)} 
            className="md:hidden text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-800"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation items */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 768) setSidebarCollapsed(true);
                }}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                      : 'text-gray-400 hover:bg-gray-800/80 hover:text-gray-200'
                  }`
                }
                title={sidebarCollapsed ? item.name : undefined}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {(!sidebarCollapsed || window.innerWidth < 768) && (
                  <span className="truncate">{item.name}</span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer Status Box */}
        {(!sidebarCollapsed || window.innerWidth < 768) && (
          <div className="p-4 m-3 bg-gray-800/60 rounded-xl border border-gray-800 text-xs text-gray-400 space-y-1 shrink-0">
            <div className="flex items-center justify-between text-gray-300 font-medium mb-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                AI Engine Sync
              </span>
              <span className="text-[10px] text-indigo-400 bg-indigo-950 px-1.5 py-0.5 rounded font-mono">v2.4</span>
            </div>
            <p className="text-[11px] leading-tight text-gray-400">Explainable causal models connected.</p>
          </div>
        )}
      </aside>

      {/* Mobile Backdrop Overlay */}
      {!sidebarCollapsed && (
        <div 
          onClick={() => setSidebarCollapsed(true)} 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-30 md:hidden"
        />
      )}
    </>
  );
};
