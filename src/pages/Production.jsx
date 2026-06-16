import React from 'react';
import { useApp } from '../context/AppContext';

export default function Production() {
  const { activeWarehouseId, dateRange, warehouses } = useApp();
  const selectedWarehouse = warehouses.find(w => w.id === activeWarehouseId)?.name || activeWarehouseId;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-950 tracking-tight">Milling & Production</h2>
          <p className="text-xs text-slate-500 mt-0.5">Control milling batches, sorter settings, polisher configuration, and yield tracking.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs">
        <h3 className="font-semibold text-slate-900 mb-3">Milling Batch Monitor</h3>
        <p className="text-slate-600 mb-4">Filtering metrics for: <span className="font-semibold text-slate-900">{selectedWarehouse}</span> during <span className="font-semibold text-slate-900">{dateRange.fromDate} - {dateRange.toDate}</span>.</p>
        
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 text-xs font-semibold uppercase text-slate-500 tracking-wider">
            Boiler & Whiteness Telemetry
          </div>
          <div className="p-4 text-xs font-mono text-slate-400 bg-slate-50/50">
            [Boiler pressure nominal. Sorting cameras operating at 99.8% precision...]
          </div>
        </div>
      </div>
    </div>
  );
}
