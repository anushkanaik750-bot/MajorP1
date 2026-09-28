import React, { useState } from 'react';
import { FiFileText, FiDownload, FiEye, FiPlus } from 'react-icons/fi';
import { Button, Modal } from '../components/common/Button';

export const Reports = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reports = [
    { title: "Q3 Revenue Drivers & Causal Attribution", date: "Sep 28, 2026", stats: "12 charts • 8 insights", author: "Data Analyst Agent" },
    { title: "90-Day Predictive Sales Forecast & Horizon", date: "Sep 25, 2026", stats: "8 charts • 5 predictions", author: "Prediction Agent" },
    { title: "Enterprise SaaS Churn Risk Prevention Plan", date: "Sep 20, 2026", stats: "15 charts • 12 recommendations", author: "Decision Agent" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Generated Reports</h1>
          <p className="text-sm text-gray-500">Automated explainable AI executive briefings</p>
        </div>
        <Button variant="primary" icon={FiPlus} onClick={() => setIsModalOpen(true)}>
          Generate Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((r, idx) => (
          <div key={idx} className="gb-card p-5 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mb-3">
                <FiFileText className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">{r.title}</h3>
              <p className="text-xs text-gray-500 mb-4">{r.stats}</p>
            </div>
            <div>
              <div className="text-[11px] text-gray-400 mb-3 flex items-center justify-between">
                <span>By {r.author}</span>
                <span>{r.date}</span>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                <Button variant="secondary" size="sm" icon={FiEye} className="flex-1">View</Button>
                <Button variant="primary" size="sm" icon={FiDownload} className="flex-1">Download</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Generate Explainable AI Report">
        <div className="space-y-4">
          <p className="text-xs text-gray-600">Select report template and target dataset:</p>
          <select className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Executive Revenue & Attribution Summary</option>
            <option>Predictive 90-Day Demand Forecast</option>
            <option>Data Quality Sentinel & Anomaly Report</option>
          </select>
          <Button variant="primary" className="w-full" onClick={() => setIsModalOpen(false)}>
            Compile & Generate PDF
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Reports;
