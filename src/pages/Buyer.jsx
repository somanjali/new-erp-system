import React, { useState } from 'react';
import { Search, ShoppingBag, Landmark, ArrowRight, ShieldAlert, Award } from 'lucide-react';

export default function Buyer() {
  const [searchTerm, setSearchTerm] = useState('');

  // Buyers local state
  const [buyers, setBuyers] = useState([
    { id: 'BYR-01', name: 'Hindustan Rice Exports', type: 'Exporter', variety: 'Basmati Double-Deer Bags', volume: 5500, creditLimit: 'Active', balance: 450000 },
    { id: 'BYR-02', name: 'Metro Supermarkets', type: 'Retail Chain', variety: 'Sona Masuri Premium Bags', volume: 3800, creditLimit: 'Active', balance: 120000 },
    { id: 'BYR-03', name: 'Karnataka Retail Corp', type: 'Retail Chain', variety: 'Jyothi Rice Standard Bags', volume: 4200, creditLimit: 'Near Limit', balance: 850000 },
    { id: 'BYR-04', name: 'Sri Venkateshwara Traders', type: 'Wholesaler', variety: 'Broken Rice Bulk Bags', volume: 2200, creditLimit: 'Active', balance: 34000 },
    { id: 'BYR-05', name: 'Royal Grain Distributors', type: 'Wholesaler', variety: 'Basmati Premium Bags', volume: 1500, creditLimit: 'Hold', balance: 1450000 },
    { id: 'BYR-06', name: 'Agri Export India Ltd', type: 'Exporter', variety: 'Sona Masuri Regular Bags', volume: 8000, creditLimit: 'Active', balance: 670000 },
  ]);

  // Filter buyers based on search query
  const filteredBuyers = buyers.filter(buyer => 
    buyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    buyer.variety.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCreditLimitBadge = (status) => {
    if (status === 'Active') return 'bg-emerald-50 text-emerald-700 border-emerald-100';
    if (status === 'Near Limit') return 'bg-amber-50 text-amber-700 border-amber-100';
    return 'bg-red-50 text-red-700 border-red-100';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-950 tracking-tight">Manage Buyers</h2>
          <p className="text-xs text-slate-500 mt-0.5">Manage wholesale clients, export contracts, shipment packaging criteria, and credit lines.</p>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex justify-between items-center bg-white/70 border border-slate-200/50 rounded-lg p-3 shadow-xs">
        <div className="relative w-80">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 pointer-events-none">
            <Search className="h-4 w-4" />
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search company or variety..."
            className="w-full bg-slate-50 border border-slate-200 rounded pl-9 pr-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 font-medium text-slate-800"
          />
        </div>
        <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
          Total Buyers: {buyers.length}
        </div>
      </div>

      {/* Tabular Matrix */}
      <div className="bg-white border border-slate-200 rounded-lg shadow-xs overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
              <th className="px-5 py-3">Buyer ID</th>
              <th className="px-5 py-3">Company Name</th>
              <th className="px-5 py-3">Client Type</th>
              <th className="px-5 py-3">Grain Variety Purchased</th>
              <th className="px-5 py-3">Order Volume (Bags)</th>
              <th className="px-5 py-3">Outstanding Bal</th>
              <th className="px-5 py-3 text-right">Credit Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredBuyers.map((buyer) => (
              <tr key={buyer.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-5 py-3.5 font-bold text-slate-500">{buyer.id}</td>
                <td className="px-5 py-3.5 font-bold text-slate-900">{buyer.name}</td>
                <td className="px-5 py-3.5 text-slate-500 font-medium">{buyer.type}</td>
                <td className="px-5 py-3.5 text-slate-650 font-medium">{buyer.variety}</td>
                <td className="px-5 py-3.5 text-slate-700 font-bold font-mono">{buyer.volume.toLocaleString()}</td>
                <td className="px-5 py-3.5 text-slate-900 font-semibold font-mono">₹{buyer.balance.toLocaleString()}</td>
                <td className="px-5 py-3.5 text-right">
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getCreditLimitBadge(buyer.creditLimit)}`}>
                    {buyer.creditLimit}
                  </span>
                </td>
              </tr>
            ))}
            {filteredBuyers.length === 0 && (
              <tr>
                <td colSpan="7" className="px-5 py-8 text-center text-slate-400 font-medium bg-slate-50/20">
                  No matching wholesale buyers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
