import React from 'react';
import { useApp } from '../context/AppContext';

export default function Ledger() {
  const { dateRange } = useApp();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-950 tracking-tight">General Ledger</h2>
          <p className="text-xs text-slate-500 mt-0.5">Double-entry ledger accounts, trial balances, and tax computations.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs">
        <h3 className="font-semibold text-slate-900 mb-3">Accounts Ledger Balances</h3>
        <p className="text-slate-600 mb-4">Statement period: <span className="font-semibold text-slate-900">{dateRange.fromDate}</span> to <span className="font-semibold text-slate-900">{dateRange.toDate}</span>.</p>
        
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 text-xs font-semibold uppercase text-slate-500 tracking-wider">
            Ledger Accounts Status
          </div>
          <div className="p-4 text-xs font-mono text-slate-400 bg-slate-50/50">
            [Chart of accounts: Balanced. Active codes: 104...]
          </div>
        </div>
      </div>
    </div>
  );
}
