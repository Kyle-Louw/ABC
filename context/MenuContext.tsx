import React, { createContext, useState, useContext, ReactNode } from 'react';
import { MenuItem } from '../types/MenuItem';
import initialMenu from '../data/menu.json';

type MenuContextType = {
  menu: MenuItem[];
  addItem: (item: Omit<MenuItem, 'id'>) => void;
  removeItem: (id: number) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState<MenuItem[]>(initialMenu as MenuItem[]);

  const addItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem = { ...item, id: Date.now() };
    setMenu(prev => [...prev, newItem]);
  };

  const removeItem = (id: number) => {
    setMenu(prev => prev.filter(i => i.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menu, addItem, removeItem }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error('useMenu must be used within MenuProvider');
  return ctx;
};
