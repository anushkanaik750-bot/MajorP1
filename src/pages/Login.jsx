import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLock, FiMail, FiArrowRight } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

import { Button } from '../components/common/Button';

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('alex.mercer@glassbox.ai');
  const [password, setPassword] = useState('••••••••••••');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl relative z-10 border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-black text-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-indigo-500/30">
            G
          </div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Welcome to GlassBox BI</h2>
          <p className="text-xs text-gray-500 mt-1">Explainable AI Business Intelligence System</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Email Address</label>
            <div className="relative">
              <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Password</label>
            <div className="relative">
              <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
              />
            </div>
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full mt-2" icon={FiArrowRight}>
            Sign In to Workspace
          </Button>
        </form>

        <div className="mt-6 pt-4 border-t border-gray-100 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 font-medium">
            <FiSparkles className="w-3.5 h-3.5 text-indigo-600" />
            GlassBox AI Engine v2.4 Active
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
