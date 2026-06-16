import React from 'react';
import { useApp } from '../context/AppContext';

export default function Supplier() {
  const { activeWarehouseId, dateRange, warehouses } = useApp();
  const selectedWarehouse = warehouses.find(w => w.id === activeWarehouseId)?.name || activeWarehouseId;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-950 tracking-tight">Supplier Directory</h2>
          <p className="text-xs text-slate-500 mt-0.5">Manage farmer details, commissions, raw paddy contracts, and outstanding balances.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs">
        <h3 className="font-semibold text-slate-900 mb-3">Procurement Registry</h3>
        <p className="text-slate-600 mb-4">Contracts mapped for: <span className="font-semibold text-slate-900">{selectedWarehouse}</span> from <span className="font-semibold text-slate-900">{dateRange.fromDate}</span> to <span className="font-semibold text-slate-900">{dateRange.toDate}</span>.</p>
        
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 text-xs font-semibold uppercase text-slate-500 tracking-wider">
            Active Procurement Contracts
          </div>
          <div className="p-4 text-xs font-mono text-slate-400 bg-slate-50/50">
            [Procured: 1,200 Tons this month. Average bag weight: 50.1 kg...]
          </div>
        </div>
      </div>
    </div>
  );
}
