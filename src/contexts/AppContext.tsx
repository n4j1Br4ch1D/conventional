import React, { useState, createContext } from 'react';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext({
  currentPanel: 'templates',
  setCurrentPanel: (currentPanel: string) => {},
  splitSizes: [50, 50],
  setSplitSizes: (splitSizes: number[]) => {},
});

export const AppProvider = ({ children }: AppProviderProps) => {
  const [splitSizes, setSplitSizes] = useState([50, 50]);
  const [currentPanel, setCurrentPanel] = useState('templates');

  return (
    <AppContext.Provider
      value={{ currentPanel, splitSizes, setSplitSizes, setCurrentPanel }}
    >
      {children}
    </AppContext.Provider>
  );
};
