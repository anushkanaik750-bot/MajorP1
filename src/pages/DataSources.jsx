import React, { useState } from 'react';
import { FiPlus, FiDatabase } from 'react-icons/fi';
import { Button, Modal } from '../components/common/Button';
import { DatasetCard } from '../components/data/DatasetCard';
import { UploadBox } from '../components/data/UploadBox';
import { useNavigate } from 'react-router-dom';

export const DataSources = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sources = [
    { name: "Q3_Sales_Performance.csv", type: "CSV", rows: "14,892", cols: "18", status: "Processed", lastUpdated: "2 hours ago" },
    { name: "Customer_Churn_Log.json", type: "JSON", rows: "8,420", cols: "12", status: "Processed", lastUpdated: "1 day ago" },
    { name: "Enterprise_ARR_2026.xlsx", type: "XLSX", rows: "2,150", cols: "24", status: "Processed", lastUpdated: "3 days ago" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Data Sources</h1>
          <p className="text-sm text-gray-500">Connected enterprise datasets & audit health</p>
        </div>
        <Button variant="primary" icon={FiPlus} onClick={() => setIsModalOpen(true)}>
          Add Data Source
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sources.map((src, idx) => (
          <DatasetCard 
            key={idx} 
            {...src} 
            onView={() => navigate('/dataset-details')}
            onAnalyze={() => navigate('/analytics')}
          />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Upload New Data Source">
        <UploadBox />
      </Modal>
    </div>
  );
};

export default DataSources;
