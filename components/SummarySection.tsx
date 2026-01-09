import React from 'react';
import { LOB_DATA, TOTAL_POLICIES } from '../constants';
import { Calendar } from 'lucide-react';

const LobTable = () => {
  return (
    <div className="flex flex-col h-full bg-white shadow-sm border border-gray-200">
      <div className="bg-gray-900 text-white px-3 py-2 text-sm font-bold flex justify-between items-center">
        <span>LOB</span>
        <span>Sum of COUNT...</span>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-sm">
          <tbody>
            {LOB_DATA.map((item, idx) => (
              <tr key={item.label} className={`${idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'} border-b border-gray-100`}>
                <td className="px-3 py-1.5 text-gray-800">{item.label}</td>
                <td className="px-3 py-1.5 text-right font-medium text-gray-800">{item.value.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-gray-900 text-white px-3 py-2 text-sm font-bold flex justify-between items-center mt-auto">
        <span>Total</span>
        <span>{TOTAL_POLICIES.toLocaleString()}</span>
      </div>
    </div>
  );
};

const KpiCard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100 border border-gray-200 shadow-sm rounded-sm">
      <div className="text-5xl font-extrabold text-gray-800 tracking-tight">255K</div>
      <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mt-2">POLICIES IN SURINAME</div>
    </div>
  );
};

const DateSliderInput = ({ label, start, end }: { label: string, start: string, end: string }) => {
  return (
    <div className="mb-6">
      <div className="text-xs font-bold text-gray-500 uppercase mb-2">{label}</div>
      <div className="flex gap-4 mb-3">
        <div className="relative flex-1">
           <input 
            type="text" 
            value={start} 
            readOnly 
            className="w-full border border-gray-300 bg-gray-50 px-2 py-1 text-sm text-gray-700 rounded-sm focus:outline-none"
           />
           <Calendar className="w-3 h-3 text-blue-400 absolute right-2 top-2" />
        </div>
        <div className="relative flex-1">
           <input 
            type="text" 
            value={end} 
            readOnly 
            className="w-full border border-gray-300 bg-gray-50 px-2 py-1 text-sm text-gray-700 rounded-sm focus:outline-none"
           />
           <Calendar className="w-3 h-3 text-blue-400 absolute right-2 top-2" />
        </div>
      </div>
      {/* Custom visual slider representation */}
      <div className="relative h-6 w-full flex items-center">
        <div className="absolute w-full h-1 bg-gray-300 rounded-full"></div>
        <div className="absolute h-1 bg-gray-500 rounded-full left-0 right-0"></div>
        {/* Left Handle */}
        <div className="absolute left-0 w-4 h-4 bg-white border-2 border-gray-500 rounded-full shadow cursor-pointer hover:scale-110 transition-transform"></div>
        {/* Right Handle */}
        <div className="absolute right-0 w-4 h-4 bg-white border-2 border-gray-500 rounded-full shadow cursor-pointer hover:scale-110 transition-transform"></div>
      </div>
    </div>
  );
};

export const SummarySection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4 h-auto lg:h-[300px]">
      {/* Left Table Widget */}
      <div className="lg:col-span-3 h-full">
        <LobTable />
      </div>

      {/* Center KPI Widget */}
      <div className="lg:col-span-4 h-full">
        <KpiCard />
      </div>

      {/* Right Date Filter Widget */}
      <div className="lg:col-span-5 bg-gray-100 p-4 border border-gray-200 rounded-sm h-full flex flex-col justify-center">
        <DateSliderInput 
          label="DATUM_BEGIN_GELDIG" 
          start="12/7/2009" 
          end="12/31/2025" 
        />
        <DateSliderInput 
          label="DATUM_EIND_LOPEND" 
          start="1/1/2026" 
          end="1/1/2431" 
        />
      </div>
    </div>
  );
};