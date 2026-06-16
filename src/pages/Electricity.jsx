import React from 'react';
import { useApp } from '../context/AppContext';

export default function Electricity() {
  const { dateRange } = useApp();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-950 tracking-tight">Electricity & Utilities</h2>
          <p className="text-xs text-slate-500 mt-0.5">Audit grid power consumption, power factor penalties, generator fuel levels, and steam turbine stats.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs">
        <h3 className="font-semibold text-slate-900 mb-3">Power & Generator Logs</h3>
        <p className="text-slate-600 mb-4">Tracking energy statistics for: <span className="font-semibold text-slate-900">{dateRange.fromDate} - {dateRange.toDate}</span>.</p>
        
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 text-xs font-semibold uppercase text-slate-500 tracking-wider">
            Industrial Power Meter & Fuel Log
          </div>
          <div className="p-4 text-xs font-mono text-slate-400 bg-slate-50/50">
            [Power factor: 0.96 (Nominal). Gen-Set Fuel: 4,500 L. Diesel run-time: 14.5 hrs...]
          </div>
        </div>
      </div>
    </div>
  );
}
