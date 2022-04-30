import {createContext, ProviderProps, useContext} from 'react';

const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);

const AuthProvider = () => {
  const login = () => {};
  const logout = () => {};

  return <AuthContext.Provider value={{login, logout}} />;
};

export {AuthProvider, useAuth};
