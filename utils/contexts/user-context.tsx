import {createContext, useState} from 'react';

const UserContext = createContext({});

const UserProvider = ({children}) => {
  return (
    <UserContext.Provider
      value={useState({
        isLoggedIn: false,
        email: 'george@thebeatles.com',
      })}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};
