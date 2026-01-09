import React from 'react';
import { TABLE_DATA } from '../constants';

export const DataTable = () => {
  return (
    <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-blue-500">
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">System</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">Policy Number</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">DATUM_BEGIN_GELDIG</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">DATUM_EIND_LOPEND</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">PRODUCTVORM_OMSCHRIJVING</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">PRODUCTGROEP_OMSCHRIJVING</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {TABLE_DATA.map((row, idx) => (
              <tr key={`${row.policyNumber}-${idx}`} className={`${idx % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                <td className="px-4 py-2.5 text-sm text-gray-700">{row.system}</td>
                <td className="px-4 py-2.5 text-sm text-gray-700">{row.policyNumber}</td>
                <td className="px-4 py-2.5 text-sm text-gray-700">{row.startDate}</td>
                <td className="px-4 py-2.5 text-sm text-gray-700">{row.endDate}</td>
                <td className="px-4 py-2.5 text-sm text-gray-700">{row.desc}</td>
                <td className="px-4 py-2.5 text-sm text-gray-700">{row.group}</td>
                <td className="px-4 py-2.5 text-sm text-gray-700">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};