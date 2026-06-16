import React from 'react';

export default function Profile() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-950 tracking-tight">Super Admin Profile Settings</h2>
          <p className="text-xs text-slate-500 mt-0.5">Edit credentials, view access roles, session logs, and system audit logs.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs">
        <h3 className="font-semibold text-slate-900 mb-3">User & Account Details</h3>
        
        <div className="space-y-4 text-xs">
          <div className="flex border-b border-slate-100 pb-3">
            <span className="w-32 text-slate-400 font-medium">User Role</span>
            <span className="text-slate-800 font-semibold">Super Admin / Mill Manager</span>
          </div>
          <div className="flex border-b border-slate-100 pb-3">
            <span className="w-32 text-slate-400 font-medium">Email Address</span>
            <span className="text-slate-800 font-semibold">manager@goldenricerise.com</span>
          </div>
          <div className="flex border-b border-slate-100 pb-3">
            <span className="w-32 text-slate-400 font-medium">Last Login IP</span>
            <span className="text-slate-500 font-mono">192.168.1.120 (2026-06-16 19:04)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
