import React, { useState, createContext } from 'react';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext({
  splitSizes: [50, 50],
  setSplitSizes: (splitSizes: number[]) => {},
});

export const AppProvider = ({ children }: AppProviderProps) => {
  const [splitSizes, setSplitSizes] = useState([50, 50]);

  return (
    <AppContext.Provider value={{ splitSizes, setSplitSizes }}>
      {children}
    </AppContext.Provider>
  );
};
