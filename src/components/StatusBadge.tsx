
import React from 'react';

interface StatusBadgeProps {
  status: 'OK' | 'WARNING';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'OK':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'WARNING':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${getStatusStyles()}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
