import React from 'react';
import { useApp } from '../context/AppContext';

export default function PaddyEntry() {
  const { activeWarehouseId, dateRange, warehouses } = useApp();
  const selectedWarehouse = warehouses.find(w => w.id === activeWarehouseId)?.name || activeWarehouseId;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-950 tracking-tight">Paddy Entry Log</h2>
          <p className="text-xs text-slate-500 mt-0.5">Record and monitor incoming paddy shipments, moisture tests, and weight tickets.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs">
        <h3 className="font-semibold text-slate-900 mb-3">Shipment Logs & Moisture Control</h3>
        <p className="text-slate-600 mb-4">Filtering results for: <span className="font-semibold text-slate-900">{selectedWarehouse}</span> from <span className="font-semibold text-slate-900">{dateRange.fromDate}</span> to <span className="font-semibold text-slate-900">{dateRange.toDate}</span>.</p>
        
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 text-xs font-semibold uppercase text-slate-500 tracking-wider">
            Active Weighbridge & Silo Assignment Queue
          </div>
          <div className="p-4 text-xs font-mono text-slate-400 bg-slate-50/50">
            [Awaiting incoming truck scale signals...]
          </div>
        </div>
      </div>
    </div>
  );
}
