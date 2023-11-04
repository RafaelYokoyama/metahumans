"use client";
import Loading from '@/components/atoms/Loading/Loading';
import { api } from '@/services/api';
import { Heroes } from '@/types/heroes';
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type DataContextType = {
  data: Heroes[] | null;
  isLoading: boolean;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider = ({ children }: { children: ReactNode }) => {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<Heroes[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/');
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return (
    <DataContext.Provider value={{ data, isLoading }}>{children}</DataContext.Provider>
  );
};

const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};

export { DataProvider, useDataContext };
