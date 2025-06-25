
import React from 'react';
import AppSidebar from '../components/AppSidebar';
import QCHeader from '../components/QCHeader';
import QCTable from '../components/QCTable';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <AppSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <QCHeader />
        
        {/* Table */}
        <div className="flex-1 p-6">
          <QCTable />
        </div>
      </div>
    </div>
  );
};

export default Index;
