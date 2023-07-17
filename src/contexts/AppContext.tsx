import {PropsWithChildren, createContext, useCallback, useState} from 'react';

export interface IAppContext {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

export const AppContext = createContext<IAppContext>({
  isDark: false,
  toggleTheme: () => {},
});

export const AppContextProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleTheme = useCallback((isDark: boolean) => {
    setIsDark(isDark);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isDark,
        toggleTheme,
      }}>
      {children}
    </AppContext.Provider>
  );
};
