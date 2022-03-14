import { createContext, useContext } from 'react';

export const SortContext = createContext({
  sort: [''],
  setSort: (_value: string[]) => {},
});

export const useSortContext = () => useContext(SortContext);
