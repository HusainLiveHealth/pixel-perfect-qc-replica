
import React from 'react';
import { ChevronDown } from 'lucide-react';
import StatusBadge from './StatusBadge';

interface QCData {
  controlName: string;
  machineName: string;
  status: 'OK' | 'WARNING';
  lastQCValue: string;
  dateOfLastQC: string;
}

const QCTable = () => {
  const qcData: QCData[] = [
    { controlName: 'Alanine Aminotransferase (ALT)', machineName: 'Alinity', status: 'OK', lastQCValue: '215 (L3)', dateOfLastQC: 'Jun 24, 2025 9:39 PM' },
    { controlName: 'Albumin (BCG)', machineName: 'Alinity', status: 'OK', lastQCValue: '6 (L3)', dateOfLastQC: 'Jun 24, 2025 9:31 PM' },
    { controlName: 'Apolipoprotein A1 (APO A1)', machineName: 'Alinity', status: 'OK', lastQCValue: '157 (L2)', dateOfLastQC: 'Jun 1, 2025 2:26 AM' },
    { controlName: 'Amylase', machineName: 'Alinity', status: 'OK', lastQCValue: '332 (L3)', dateOfLastQC: 'Jun 24, 2025 9:30 PM' },
    { controlName: 'Alkaline Phosphatase (ALKP)', machineName: 'Alinity', status: 'OK', lastQCValue: '410 (L3)', dateOfLastQC: 'Jun 24, 2025 9:35 PM' },
    { controlName: 'Bilirubin, Direct', machineName: 'Alinity', status: 'WARNING', lastQCValue: '1 (L2)', dateOfLastQC: 'Jun 24, 2025 9:36 PM' },
    { controlName: 'Aspartate Aminotransferase (AS...', machineName: 'Alinity', status: 'OK', lastQCValue: '321 (L3)', dateOfLastQC: 'Jun 24, 2025 9:38 PM' },
    { controlName: 'Bilirubin, Total', machineName: 'Alinity', status: 'OK', lastQCValue: '5.5 (L3)', dateOfLastQC: 'Jun 24, 2025 9:36 PM' },
    { controlName: 'Apolipoprotein B (APO B)', machineName: 'Alinity', status: 'OK', lastQCValue: '136 (L3)', dateOfLastQC: 'Jun 24, 2025 9:39 PM' },
    { controlName: 'Calcium', machineName: 'Alinity', status: 'OK', lastQCValue: '12.4 (L3)', dateOfLastQC: 'Jun 24, 2025 9:32 PM' },
    { controlName: 'Cholesterol: HDL', machineName: 'Alinity', status: 'OK', lastQCValue: '75 (L3)', dateOfLastQC: 'Jun 24, 2025 9:38 PM' },
    { controlName: 'Chloride', machineName: 'Alinity', status: 'OK', lastQCValue: '113 (L3)', dateOfLastQC: 'Jun 24, 2025 10:50 PM' },
    { controlName: 'Cholesterol, LDL', machineName: 'Alinity', status: 'OK', lastQCValue: '161 (L3)', dateOfLastQC: 'Jun 24, 2025 9:39 PM' },
    { controlName: 'Creatine Kinase (CK)', machineName: 'Alinity', status: 'OK', lastQCValue: '517 (L3)', dateOfLastQC: 'Jun 24, 2025 9:39 PM' },
    { controlName: 'Cholesterol, Total', machineName: 'Alinity', status: 'OK', lastQCValue: '263 (L3)', dateOfLastQC: 'Jun 24, 2025 9:38 PM' },
    { controlName: 'Lactate Dehydrogenase (LDH) I...', machineName: 'Alinity', status: 'OK', lastQCValue: '454 (L3)', dateOfLastQC: 'Jun 24, 2025 9:38 PM' },
    { controlName: 'Glucose', machineName: 'Alinity', status: 'OK', lastQCValue: '333 (L3)', dateOfLastQC: 'Jun 24, 2025 9:32 PM' },
    { controlName: 'Lipoprotein (a)', machineName: 'Alinity', status: 'OK', lastQCValue: '20.8 (L3)', dateOfLastQC: 'Jun 24, 2025 9:39 PM' },
    { controlName: 'C-Reactive Protein', machineName: 'Alinity', status: 'OK', lastQCValue: '3.13 (L3)', dateOfLastQC: 'Jun 24, 2025 9:38 PM' },
    { controlName: 'Magnesium', machineName: 'Alinity', status: 'OK', lastQCValue: '4.37 (L3)', dateOfLastQC: 'Jun 24, 2025 9:38 PM' },
    { controlName: 'Protein, Total', machineName: 'Alinity', status: 'OK', lastQCValue: '8.9 (L3)', dateOfLastQC: 'Jun 24, 2025 9:33 PM' },
    { controlName: 'Potassium', machineName: 'Alinity', status: 'OK', lastQCValue: '6.8 (L3)', dateOfLastQC: 'Jun 24, 2025 10:50 PM' },
  ];

  return (
    <div className="bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  Control Name
                  <ChevronDown className="w-4 h-4" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  Machine Name
                  <ChevronDown className="w-4 h-4" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  Status
                  <ChevronDown className="w-4 h-4" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  Last QC Value
                  <ChevronDown className="w-4 h-4" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  Date of last QC
                  <ChevronDown className="w-4 h-4" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Edit
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {qcData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.controlName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.machineName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                  {row.lastQCValue}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.dateOfLastQC}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-1 rounded text-sm font-medium transition-colors duration-150">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QCTable;
