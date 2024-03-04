import { createContext, useCallback, useState } from 'react';

export const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
  const [page, setPage] = useState(null);

  const handlePage = useCallback((item) => setPage(item), []);

  const handleExit = useCallback(() => setPage(null), []);

  return (
    <PageContext.Provider value={{ page, handlePage, handleExit }}>
      {children}
    </PageContext.Provider>
  );
};
