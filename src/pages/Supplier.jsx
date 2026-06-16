import React, { useState } from 'react';
import { Users, UserPlus, Search, Landmark, Database, Trash2, X, Plus } from 'lucide-react';

export default function Supplier() {
  const [activeTab, setActiveTab] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  // New Supplier Form State
  const [newName, setNewName] = useState('');
  const [newType, setNewType] = useState('Farmer');
  const [newSilo, setNewSilo] = useState('Silo B');
  const [newSupplied, setNewSupplied] = useState('');
  const [newBalance, setNewBalance] = useState('');

  // Suppliers local state
  const [suppliers, setSuppliers] = useState([
    { id: 'SUP-01', name: 'Ramesh Kumar', type: 'Farmer', silo: 'Silo B', supplied: 142.5, balance: 240000 },
    { id: 'SUP-02', name: 'Siva Prasad', type: 'Paik', silo: 'Silo A', supplied: 480.0, balance: 850000 },
    { id: 'SUP-03', name: 'Sri Balaji Traders', type: 'Dealer', silo: 'Godown 1', supplied: 950.0, balance: 1248500 },
    { id: 'SUP-04', name: 'Raju Gowda', type: 'Farmer', silo: 'Silo B', supplied: 88.2, balance: 155000 },
    { id: 'SUP-05', name: 'Gopal Das', type: 'Paik', silo: 'Silo A', supplied: 240.0, balance: 420000 },
    { id: 'SUP-06', name: 'Reliance Agri Markets', type: 'Dealer', silo: 'Godown 2', supplied: 1500.0, balance: 2200000 },
  ]);

  const handleAddSupplier = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newSupplied || !newBalance) {
      alert('Please fill in all fields.');
      return;
    }

    const nextId = `SUP-0${suppliers.length + 1}`;
    const newEntry = {
      id: nextId,
      name: newName.trim(),
      type: newType,
      silo: newSilo,
      supplied: parseFloat(newSupplied),
      balance: parseInt(newBalance),
    };

    setSuppliers([...suppliers, newEntry]);
    
    // Reset Form
    setNewName('');
    setNewSupplied('');
    setNewBalance('');
    setIsAddModalOpen(false);
  };

  // Filter suppliers based on active tab selection
  const filteredSuppliers = suppliers.filter(supplier => {
    if (activeTab === 'all') return true;
    if (activeTab === 'farmers') return supplier.type === 'Farmer';
    if (activeTab === 'paiks') return supplier.type === 'Paik';
    if (activeTab === 'dealers') return supplier.type === 'Dealer';
    return true;
  });

  const tabs = [
    { id: 'all', label: 'All Suppliers' },
    { id: 'farmers', label: 'Farmers' },
    { id: 'paiks', label: 'Paiks (Brokers)' },
    { id: 'dealers', label: 'Dealers/Businessmen' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-950 tracking-tight">Manage Suppliers</h2>
          <p className="text-xs text-slate-500 mt-0.5">Track procurement directories, manage crop agents, outstanding balances, and silo stock targets.</p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded text-xs transition-colors shadow-xs cursor-pointer"
        >
          <UserPlus className="h-4 w-4" />
          <span>Add New Supplier</span>
        </button>
      </div>

      {/* Tab Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200 text-xs gap-3">
        {/* Tabs */}
        <div className="flex space-x-1 -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-semibold border-b-2 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'border-amber-500 text-slate-900 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid displaying active suppliers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSuppliers.map((supplier) => (
          <div key={supplier.id} className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs flex flex-col justify-between">
            {/* Top row */}
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{supplier.id}</div>
                <h3 className="font-bold text-sm text-slate-900 mt-0.5">{supplier.name}</h3>
              </div>
              <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                supplier.type === 'Farmer' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                supplier.type === 'Paik' ? 'bg-sky-50 text-sky-700 border-sky-100' :
                'bg-amber-50 text-amber-700 border-amber-100'
              }`}>
                {supplier.type === 'Dealer' ? 'Dealer/Businessman' : supplier.type}
              </span>
            </div>

            {/* Mid rows */}
            <div className="my-5 space-y-2.5 text-xs">
              <div className="flex justify-between items-center text-slate-500">
                <span className="flex items-center"><Database className="h-3.5 w-3.5 text-slate-400 mr-1.5 shrink-0" /> Target Warehouse:</span>
                <span className="font-semibold text-slate-700">{supplier.silo}</span>
              </div>
              <div className="flex justify-between items-center text-slate-500">
                <span className="flex items-center"><Landmark className="h-3.5 w-3.5 text-slate-400 mr-1.5 shrink-0" /> Total Paddy Supplied:</span>
                <span className="font-semibold text-slate-800">{supplier.supplied.toLocaleString()} Tons</span>
              </div>
            </div>

            {/* Bottom Balance section */}
            <div className="bg-slate-50 border border-slate-100 rounded p-3 flex justify-between items-center text-xs">
              <span className="text-slate-400 font-medium">Outstanding Balance:</span>
              <span className="font-extrabold text-slate-900">₹{supplier.balance.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Supplier Modal Overlay */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs flex justify-center items-center z-50 p-4 transition-all">
          <div className="bg-slate-900 border border-slate-800 rounded-lg w-full max-w-md shadow-2xl overflow-hidden text-xs">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b border-slate-800 px-6 py-4">
              <div className="flex items-center space-x-2 text-slate-100">
                <UserPlus className="h-4.5 w-4.5 text-amber-500" />
                <h3 className="font-bold text-sm">Add New Supplier Profile</h3>
              </div>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleAddSupplier} className="p-6 space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Supplier Name</label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Haran Singh"
                  className="w-full bg-slate-950 border border-slate-800 text-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              {/* Type & Target Allocation */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Supplier Type</label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 text-slate-300 rounded px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="Farmer">Farmer</option>
                    <option value="Paik">Paik (Broker)</option>
                    <option value="Dealer">Dealer/Businessman</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Active Warehouse</label>
                  <select
                    value={newSilo}
                    onChange={(e) => setNewSilo(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 text-slate-300 rounded px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="Silo A">Silo A</option>
                    <option value="Silo B">Silo B</option>
                    <option value="Godown 1">Godown 1</option>
                    <option value="Godown 2">Godown 2</option>
                  </select>
                </div>
              </div>

              {/* Supplied Tons & Balance */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Total Supplied (Tons)</label>
                  <input
                    type="number"
                    step="0.1"
                    required
                    value={newSupplied}
                    onChange={(e) => setNewSupplied(e.target.value)}
                    placeholder="e.g. 150"
                    className="w-full bg-slate-950 border border-slate-800 text-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Initial Due (₹)</label>
                  <input
                    type="number"
                    required
                    value={newBalance}
                    onChange={(e) => setNewBalance(e.target.value)}
                    placeholder="e.g. 50000"
                    className="w-full bg-slate-950 border border-slate-800 text-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="flex justify-end space-x-3 pt-4 border-t border-slate-800 mt-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-slate-850 hover:bg-slate-800 text-slate-300 rounded font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded font-bold transition-colors cursor-pointer"
                >
                  Create Supplier Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
