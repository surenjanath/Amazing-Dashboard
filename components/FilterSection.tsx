import React from 'react';

const CheckboxItem = ({ label, defaultChecked = false }: { label: string, defaultChecked?: boolean }) => (
  <div className="flex items-center gap-2 mb-1">
    <input 
      type="checkbox" 
      defaultChecked={defaultChecked}
      className="w-4 h-4 border-2 border-gray-400 rounded text-blue-600 focus:ring-blue-500 cursor-pointer" 
    />
    <span className="text-gray-700 text-sm font-medium">{label}</span>
  </div>
);

const LobButton = ({ label }: { label: string }) => (
  <div className="border border-gray-300 bg-gray-50 text-gray-600 px-4 py-2 text-sm font-medium text-center shadow-sm cursor-pointer hover:bg-gray-100 transition-colors">
    {label}
  </div>
);

export const FilterSection = () => {
  return (
    <div className="bg-white p-4 rounded-sm shadow-sm border border-gray-200 mb-4">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* System Column */}
        <div className="min-w-[120px]">
          <h3 className="text-gray-500 text-xs font-semibold mb-3 uppercase tracking-wide">System</h3>
          <div className="flex flex-col">
            <CheckboxItem label="Life" />
            <CheckboxItem label="Medical" />
            <CheckboxItem label="Non-Life" />
          </div>
        </div>

        {/* LOB Column */}
        <div className="flex-1">
          <h3 className="text-gray-500 text-xs font-semibold mb-3 uppercase tracking-wide">LOB</h3>
          <div className="flex flex-col gap-2">
            {/* Row 1 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <LobButton label="Aansprakelijkheid" />
              <LobButton label="Life" />
              <LobButton label="PO" />
              <LobButton label="Wonen" />
            </div>
            {/* Row 2 */}
            <div className="flex gap-2">
               <div className="w-1/4 pr-1"><LobButton label="Health" /></div>
               <div className="w-1/4 px-1"><LobButton label="Medical" /></div>
               <div className="w-1/4 pl-1"><LobButton label="Verkeer" /></div>
            </div>
          </div>
        </div>

        {/* Status Column */}
        <div className="min-w-[150px] border-l border-dashed border-gray-300 pl-6">
          <h3 className="text-gray-500 text-xs font-semibold mb-3 uppercase tracking-wide">STATUS</h3>
          <div className="flex flex-col">
            <CheckboxItem label="Select all" defaultChecked={true} />
            <CheckboxItem label="In Force" />
            <CheckboxItem label="Lopende" defaultChecked={true} />
          </div>
        </div>

      </div>
    </div>
  );
};