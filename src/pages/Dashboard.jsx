import React, { useEffect, useState } from 'react';
import { FiDollarSign, FiShoppingBag, FiTrendingUp, FiShield, FiFilter, FiRefreshCw } from 'react-icons/fi';
import { useApp } from '../context/AppContext';
import { fetchDashboardData } from '../services/api';
import { KPICard } from '../components/dashboard/KPICard';
import { RevenueChart } from '../components/dashboard/RevenueChart';
import { CategoryChart } from '../components/dashboard/CategoryChart';
import { InsightCard } from '../components/dashboard/InsightCard';
import { Loader } from '../components/common/Button';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const { user } = useApp();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('Q3 2026');

  const loadData = () => {
    setLoading(true);
    fetchDashboardData().then(res => {
      setData(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadData();
  }, [timeRange]);

  if (loading || !data) return <Loader label="Auditing dashboard telemetry with GlassBox AI..." />;

  const { metrics, revenueSeries, categoryBreakdown } = data;

  return (
    <div className="space-y-6">
      {/* Header Greeting & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Good evening, {user.name} 👋</h1>
          <p className="text-sm text-gray-500 mt-0.5">Here is your explainable business intelligence summary for <span className="font-semibold text-gray-800">{timeRange}</span>.</p>
        </div>

        {/* Time Range Selector & Refresh */}
        <div className="flex items-center gap-2">
          <div className="bg-white border border-gray-200 rounded-lg p-1 flex items-center gap-1 text-xs font-semibold text-gray-600 shadow-2xs">
            {['30 Days', 'Q3 2026', 'YTD'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  timeRange === range ? 'bg-indigo-600 text-white shadow-2xs' : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
          <button 
            onClick={loadData}
            className="p-2 text-gray-500 hover:text-indigo-600 bg-white border border-gray-200 rounded-lg hover:bg-indigo-50 transition-colors"
            title="Refresh AI Models"
          >
            <FiRefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Flagship AI Insight Card near top */}
      <InsightCard 
        headline="Revenue increased by 18.6% this month"
        factors={[
          { factor: "Enterprise Cloud expansion in North America", impact: "+11.2%" },
          { factor: "Reduced customer churn in Q3 renewal cohort", impact: "+4.8%" },
          { factor: "Automated upsells via API Tier upgrades", impact: "+2.6%" }
        ]}
        confidence={94}
        onAskAgent={() => navigate('/agents')}
      />

      {/* 4 KPI Cards in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard 
          title="Total Revenue" 
          value={metrics.totalRevenue} 
          trend={metrics.revenueTrend} 
          isPositive={true} 
          icon={FiDollarSign} 
        />
        <KPICard 
          title="Total Orders" 
          value={metrics.totalOrders} 
          trend={metrics.ordersTrend} 
          isPositive={true} 
          icon={FiShoppingBag} 
        />
        <KPICard 
          title="Growth Rate" 
          value={metrics.growthPercent} 
          trend={metrics.growthTrend} 
          isPositive={true} 
          icon={FiTrendingUp} 
        />
        <KPICard 
          title="Data Quality" 
          value={metrics.dataQuality} 
          trend={metrics.qualityTrend} 
          isPositive={true} 
          icon={FiShield} 
        />
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart data={revenueSeries} />
        </div>
        <div>
          <CategoryChart data={categoryBreakdown} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
