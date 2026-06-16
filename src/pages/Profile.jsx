import React from 'react';
import { useApp } from '../context/AppContext';
import { LogOut, Shield } from 'lucide-react';

export default function Profile() {
  const { logout } = useApp();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-950 tracking-tight">Super Admin Profile Settings</h2>
          <p className="text-xs text-slate-500 mt-0.5">Edit credentials, view access roles, session logs, and system audit logs.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs max-w-2xl">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-slate-100 rounded text-slate-700">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 text-sm">User & Account Details</h3>
            <p className="text-xs text-slate-500">Security permissions: Full Read & Write</p>
          </div>
        </div>
        
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

        {/* Logout Button */}
        <div className="pt-6 mt-6 border-t border-slate-150 flex justify-end">
          <button
            onClick={logout}
            className="flex items-center space-x-2 bg-red-650 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-xs transition-colors shadow-xs"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out of System</span>
          </button>
        </div>
      </div>
    </div>
  );
}
