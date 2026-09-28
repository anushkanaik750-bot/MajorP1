import React from 'react';
import { useApp } from '../context/AppContext';
import { Button } from '../components/common/Button';

export const Settings = () => {
  const { user } = useApp();

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Account & Workspace Settings</h1>
        <p className="text-sm text-gray-500">Manage user profile, explainability preferences, and API keys</p>
      </div>

      <div className="gb-card p-6 space-y-4">
        <h3 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3">User Profile</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Full Name</label>
            <input type="text" defaultValue={user.name} className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-medium" />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Email Address</label>
            <input type="email" defaultValue={user.email} className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-medium" />
          </div>
        </div>
        <Button variant="primary" size="sm">Save Changes</Button>
      </div>

      <div className="gb-card p-6 space-y-4">
        <h3 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3">AI Explainability Engine Preferences</h3>
        <div className="space-y-3 text-xs">
          <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
            <div>
              <span className="font-bold text-gray-900 block">Show Causal SHAP Traces</span>
              <span className="text-gray-500">Display mathematical feature attribution for all AI insight cards</span>
            </div>
            <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600 rounded" />
          </label>
          <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
            <div>
              <span className="font-bold text-gray-900 block">Auto-Audit Data Quality on Upload</span>
              <span className="text-gray-500">Trigger Sentinel Agent upon file drag-and-drop</span>
            </div>
            <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600 rounded" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;
