import axios from 'axios';

// Mock API client stubbed for future real backend integration
const apiClient = axios.create({
  baseURL: 'https://api.glassboxbi.example.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

// Mock service functions
export const fetchDashboardData = async () => {
  // Simulating API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        metrics: {
          totalRevenue: "$1,284,500",
          revenueTrend: "+18.6%",
          totalOrders: "14,892",
          ordersTrend: "+12.4%",
          growthPercent: "24.8%",
          growthTrend: "+3.2%",
          dataQuality: "98.4%",
          qualityTrend: "+1.1%"
        },
        revenueSeries: [
          { month: 'Jan', revenue: 65000, target: 60000 },
          { month: 'Feb', revenue: 78000, target: 70000 },
          { month: 'Mar', revenue: 92000, target: 80000 },
          { month: 'Apr', revenue: 88000, target: 85000 },
          { month: 'May', revenue: 105000, target: 95000 },
          { month: 'Jun', revenue: 118000, target: 100000 },
          { month: 'Jul', revenue: 124000, target: 110000 },
          { month: 'Aug', revenue: 142000, target: 120000 },
          { month: 'Sep', revenue: 156000, target: 130000 },
        ],
        categoryBreakdown: [
          { name: 'Enterprise Cloud', value: 45, color: '#4F46E5' },
          { name: 'SaaS Subscriptions', value: 30, color: '#10B981' },
          { name: 'Professional Services', value: 15, color: '#F59E0B' },
          { name: 'API Usage', value: 10, color: '#6366F1' },
        ]
      });
    }, 200);
  });
};

export default apiClient;
