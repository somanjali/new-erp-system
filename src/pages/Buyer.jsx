import React from 'react';
import { useApp } from '../context/AppContext';

export default function Buyer() {
  const { activeWarehouseId, dateRange, warehouses } = useApp();
  const selectedWarehouse = warehouses.find(w => w.id === activeWarehouseId)?.name || activeWarehouseId;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-950 tracking-tight">Buyer Directory</h2>
          <p className="text-xs text-slate-500 mt-0.5">Manage rice buyers, dispatch schedules, sales invoices, and custom packaging orders.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs">
        <h3 className="font-semibold text-slate-900 mb-3">Sales & Shipments Registry</h3>
        <p className="text-slate-600 mb-4">Filtering sales orders dispatching from: <span className="font-semibold text-slate-900">{selectedWarehouse}</span>.</p>
        
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 text-xs font-semibold uppercase text-slate-500 tracking-wider">
            Active Sales & Export Orders
          </div>
          <div className="p-4 text-xs font-mono text-slate-400 bg-slate-50/50">
            [Pending shipments: 340 Tons. Standard packaging: 25kg PP bags...]
          </div>
        </div>
      </div>
    </div>
  );
}
