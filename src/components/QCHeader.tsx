
import React, { useState } from 'react';

const QCHeader = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">QC List Page</h1>
          
          <div className="flex items-center gap-3">
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              How to use QC
            </button>
            <button className="px-4 py-2 border border-blue-300 text-blue-600 hover:bg-blue-50 text-sm font-medium rounded">
              Go to Old Version
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium rounded">
              Apply Westgard Rule
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 text-sm font-medium rounded">
              Add Control
            </button>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === 'all' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              All Controls
            </button>
            <button
              onClick={() => setActiveTab('alerts')}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === 'alerts' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Alert/Exceptions
            </button>
            <button
              onClick={() => setActiveTab('notPerformed')}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === 'notPerformed' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Not Performed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QCHeader;
