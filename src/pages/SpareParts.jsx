import React from 'react';

export default function SpareParts() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-950 tracking-tight">Spare Parts Inventory</h2>
          <p className="text-xs text-slate-500 mt-0.5">Track sorting screens, rubber rollers, elevators, packing thread, and oil filters stock.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs">
        <h3 className="font-semibold text-slate-900 mb-3">Mechanical Inventory</h3>
        <p className="text-slate-600 mb-4">Stock list for replacement parts and consumable hardware across processing lines.</p>
        
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 text-xs font-semibold uppercase text-slate-500 tracking-wider">
            Critical Spare Inventory Status
          </div>
          <div className="p-4 text-xs font-mono text-slate-400 bg-slate-50/50">
            [Low Stock Alerts: 2 items (Rubber Rollers 10", Color Sorter Filters)...]
          </div>
        </div>
      </div>
    </div>
  );
}
