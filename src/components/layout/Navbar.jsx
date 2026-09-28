import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiSearch, FiBell, FiMenu, FiChevronDown, FiCheckCircle, 
  FiUser, FiLogOut, FiSettings, FiDatabase 
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import { useApp } from '../../context/AppContext';

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, toggleSidebar, notifications, activeDataset, setActiveDataset } = useApp();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showDatasetModal, setShowDatasetModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const datasetsList = [
    'Q3_Sales_Performance.csv',
    'Customer_Churn_Log.json',
    'Enterprise_ARR_2026.xlsx',
    'Product_Analytics_V2.csv'
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/analytics');
    }
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 shadow-2xs">
      {/* Left section: Collapse button + Dataset badge + Search */}
      <div className="flex items-center gap-3 flex-1">
        <button 
          onClick={toggleSidebar}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          title="Toggle Navigation Menu"
        >
          <FiMenu className="w-5 h-5" />
        </button>

        {/* Global Dataset Selector pill */}
        <button 
          onClick={() => setShowDatasetModal(!showDatasetModal)}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 text-xs font-medium text-gray-700 transition-colors"
          title="Switch Active Dataset"
        >
          <FiCheckCircle className="text-emerald-500 w-3.5 h-3.5 shrink-0" />
          <span className="text-gray-400">Dataset:</span>
          <span className="font-semibold text-gray-900 truncate max-w-[140px]">{activeDataset}</span>
          <FiChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </button>

        {/* Quick Dataset Switcher Dropdown */}
        {showDatasetModal && (
          <div className="absolute top-14 left-16 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
            <div className="px-3 py-1.5 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <FiDatabase className="text-indigo-600" /> Active Workspace Dataset
            </div>
            {datasetsList.map((ds) => (
              <button
                key={ds}
                onClick={() => {
                  setActiveDataset(ds);
                  setShowDatasetModal(false);
                }}
                className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-indigo-50 transition-colors ${
                  activeDataset === ds ? 'font-bold text-indigo-600 bg-indigo-50/50' : 'text-gray-700'
                }`}
              >
                <span className="truncate">{ds}</span>
                {activeDataset === ds && <FiCheckCircle className="text-indigo-600 w-3.5 h-3.5 shrink-0" />}
              </button>
            ))}
          </div>
        )}

        {/* Global Search Form */}
        <form onSubmit={handleSearchSubmit} className="relative max-w-md w-full hidden md:block">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search datasets, AI insights, agent reports..."
            className="w-full pl-9 pr-4 py-1.5 bg-gray-50 text-sm text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all placeholder:text-gray-400"
          />
        </form>
      </div>

      {/* Right Section: AI Quick Action + Notifications + User profile */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Quick AI Trigger */}
        <button 
          onClick={() => navigate('/agents')}
          className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-indigo-700 border border-purple-200 rounded-lg text-xs font-semibold hover:bg-purple-100 transition-colors shadow-2xs"
        >
          <HiSparkles className="text-indigo-600 w-3.5 h-3.5" />
          <span>Ask GlassBox AI</span>
        </button>

        {/* Notification Bell */}
        <div className="relative">
          <button 
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserMenu(false);
            }}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg relative transition-colors"
          >
            <FiBell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-600 ring-2 ring-white"></span>
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
              <div className="px-4 py-2 border-b border-gray-100 flex items-center justify-between">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">AI Notifications</h4>
                <span className="text-[10px] bg-indigo-50 text-indigo-600 font-semibold px-2 py-0.5 rounded-full">3 New</span>
              </div>
              <div className="max-h-64 overflow-y-auto divide-y divide-gray-50">
                {notifications.map((n) => (
                  <div key={n.id} className="p-3 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => navigate('/analytics')}>
                    <div className="flex items-center justify-between text-xs font-semibold text-gray-900">
                      <span>{n.title}</span>
                      <span className="text-[10px] text-gray-400 font-normal">{n.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5 leading-snug">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button 
            onClick={() => {
              setShowUserMenu(!showUserMenu);
              setShowNotifications(false);
            }}
            className="flex items-center gap-2 pl-2 border-l border-gray-200 hover:opacity-90 transition-opacity"
          >
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500/20"
            />
            <div className="hidden lg:block text-left leading-tight">
              <div className="text-xs font-bold text-gray-900 flex items-center gap-1">
                {user.name}
              </div>
              <div className="text-[10px] text-gray-500">{user.role}</div>
            </div>
            <FiChevronDown className="w-3.5 h-3.5 text-gray-400 hidden lg:block" />
          </button>

          {/* User Popover Menu */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-1 z-50">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-xs font-bold text-gray-900">{user.name}</p>
                <p className="text-[10px] text-gray-500 truncate">{user.email}</p>
              </div>
              <button 
                onClick={() => {
                  navigate('/settings');
                  setShowUserMenu(false);
                }}
                className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 flex items-center gap-2"
              >
                <FiSettings className="w-3.5 h-3.5 text-gray-400" /> Settings
              </button>
              <button 
                onClick={() => {
                  navigate('/login');
                  setShowUserMenu(false);
                }}
                className="w-full text-left px-4 py-2 text-xs text-red-600 hover:bg-red-50 flex items-center gap-2 border-t border-gray-100"
              >
                <FiLogOut className="w-3.5 h-3.5 text-red-500" /> Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
