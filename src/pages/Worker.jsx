import React from 'react';

export default function Worker() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-950 tracking-tight">Worker Directory</h2>
          <p className="text-xs text-slate-500 mt-0.5">Manage permanent mill operators, loaders, sorting contractors, and shift schedules.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs">
        <h3 className="font-semibold text-slate-900 mb-3">Staff & Labor Registry</h3>
        <p className="text-slate-600 mb-4">Central roster of operators and floor workers mapped to processing lines.</p>
        
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 text-xs font-semibold uppercase text-slate-500 tracking-wider">
            Mill Roster Status
          </div>
          <div className="p-4 text-xs font-mono text-slate-400 bg-slate-50/50">
            [Total active workers: 124. Shift A: 42. Shift B: 42. Shift C: 40...]
          </div>
        </div>
      </div>
    </div>
  );
}
