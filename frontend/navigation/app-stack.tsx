import React, {useContext} from 'react';
import {UserContext} from '../utils/contexts/user-context';
import LoggedInStack from './logged-in-stack';
import LoggedOutStack from './logged-out-stack';

const AppStack = ({Stack}) => {
  const [user, setUser] = useContext(UserContext);
  const isLoggedIn = user.isLoggedIn;
  return isLoggedIn === true ? (
    <LoggedInStack Stack={Stack} />
  ) : (
    <LoggedOutStack Stack={Stack} />
  );
};

export default AppStack;
