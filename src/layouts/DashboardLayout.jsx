import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function DashboardLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50 font-sans text-slate-700">
      {/* Fixed Topbar */}
      <Topbar />

      {/* Main Body container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Collapsible Left Sidebar */}
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

        {/* Scrollable Content Canvas with consistent internal padding */}
        <main className="flex-1 overflow-y-auto p-6 bg-slate-50/60 custom-scrollbar">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
