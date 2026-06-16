import React from 'react';
import { useApp } from '../context/AppContext';

export default function Attendance() {
  const { dateRange } = useApp();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-950 tracking-tight">Shift Attendance</h2>
          <p className="text-xs text-slate-500 mt-0.5">Biometric logs, gate entry tickets, absent tracking, and overtime audits.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs">
        <h3 className="font-semibold text-slate-900 mb-3">Biometric Logs</h3>
        <p className="text-slate-600 mb-4">Date frame: <span className="font-semibold text-slate-900">{dateRange.fromDate} - {dateRange.toDate}</span>.</p>
        
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 text-xs font-semibold uppercase text-slate-500 tracking-wider">
            Biometric Gate Integration
          </div>
          <div className="p-4 text-xs font-mono text-slate-400 bg-slate-50/50">
            [Gate Reader 1: Connected. Gate Reader 2: Connected. Synced logs: 4,120...]
          </div>
        </div>
      </div>
    </div>
  );
}
