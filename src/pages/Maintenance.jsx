import React from 'react';

export default function Maintenance() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-950 tracking-tight">Machine Maintenance</h2>
          <p className="text-xs text-slate-500 mt-0.5">Log preventive maintenance schedules, machinery downtime, oil levels, and breakdowns.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs">
        <h3 className="font-semibold text-slate-900 mb-3">Maintenance Schedule</h3>
        <p className="text-slate-600 mb-4">Servicing logs and calibration dates for color sorters, boilers, and de-stoners.</p>
        
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 text-xs font-semibold uppercase text-slate-500 tracking-wider">
            Preventive Servicing Schedule
          </div>
          <div className="p-4 text-xs font-mono text-slate-400 bg-slate-50/50">
            [Sorter #2: Calibrated 4 days ago. Boiler #1: Hydro-test scheduled...]
          </div>
        </div>
      </div>
    </div>
  );
}
