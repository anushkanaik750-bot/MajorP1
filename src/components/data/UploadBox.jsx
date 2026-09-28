import React from 'react';
import { FiUploadCloud, FiFileText } from 'react-icons/fi';
import { Button } from '../common/Button';

export const UploadBox = ({ onFileUpload }) => {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-indigo-500 bg-gray-50/50 transition-colors cursor-pointer">
      <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3">
        <FiUploadCloud className="w-6 h-6" />
      </div>
      <h4 className="text-sm font-semibold text-gray-900 mb-1">Drag and drop your dataset here</h4>
      <p className="text-xs text-gray-500 mb-4">Supports CSV, XLSX, and JSON files up to 50MB</p>
      <div className="flex items-center justify-center gap-3">
        <Button variant="secondary" size="sm" icon={FiFileText}>
          Browse Files
        </Button>
      </div>
    </div>
  );
};
