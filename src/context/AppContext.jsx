import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {
  const [activeWarehouseId, setActiveWarehouseId] = useState('all');
  const [dateRange, setDateRange] = useState({
    fromDate: '2026-06-01',
    toDate: '2026-06-30',
  });

  // Mock list of warehouses/silos for global filter selector
  const warehouses = [
    { id: 'all', name: 'All Warehouses & Silos' },
    { id: 'silo-1', name: 'Silo A - Premium Basmati' },
    { id: 'silo-2', name: 'Silo B - Non-Basmati Raw' },
    { id: 'warehouse-1', name: 'Warehouse 1 - Finished Goods' },
    { id: 'warehouse-2', name: 'Warehouse 2 - Broken Rice & Husk' },
  ];

  return (
    <AppContext.Provider value={{
      activeWarehouseId,
      setActiveWarehouseId,
      dateRange,
      setDateRange,
      warehouses,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
