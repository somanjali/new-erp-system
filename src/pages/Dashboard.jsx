import React from 'react';
import { useApp } from '../context/AppContext';

export default function Dashboard() {
  const { activeWarehouseId, dateRange, warehouses } = useApp();
  const selectedWarehouse = warehouses.find(w => w.id === activeWarehouseId)?.name || activeWarehouseId;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-950 tracking-tight">Dashboard Overview</h2>
          <p className="text-xs text-slate-500 mt-0.5">Real-time mill operational overview, crushing metrics, and stock summaries.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-xs">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Milling Status</div>
          <div className="text-2xl font-bold text-slate-900 mt-2">Active</div>
          <div className="text-xs text-emerald-600 mt-1">● Session Running (32 Tons/hr)</div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-xs">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Target Scope</div>
          <div className="text-md font-bold text-slate-800 mt-2 truncate">{selectedWarehouse}</div>
          <div className="text-xs text-slate-500 mt-1">ID: {activeWarehouseId}</div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-xs">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Interval</div>
          <div className="text-sm font-bold text-slate-800 mt-2">{dateRange.fromDate} - {dateRange.toDate}</div>
          <div className="text-xs text-slate-500 mt-1">Billing Range</div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs">
        <h3 className="font-semibold text-slate-900 mb-3">Mill Overview Summary</h3>
        <p className="text-slate-600 mb-4">Real-time overview of current paddy intake, active milling runs, and warehouse capacity.</p>
        <div className="border border-dashed border-slate-200 rounded-lg p-8 flex items-center justify-center bg-slate-50/50">
          <span className="text-xs text-slate-400 font-medium">No active data logs to display in this period.</span>
        </div>
      </div>
    </div>
  );
}
