/* eslint-disable react/prop-types */
import React, { createContext, FC, useEffect, useState } from 'react';

import firebase from '../api/config';
import { IUser, IUserContext } from './user.types';

const userContext = createContext({} as IUserContext);

export const UserProvider: FC = ({ children }) => {
  const { Provider } = userContext;
  const [userData, setUserData] = useState<IUser | null>(null);
  const [Logged, setLogged] = useState<boolean | null | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  /*
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      setUserData(user);
      console.log(`${userData?.email}sapo1`);
      setLogged(true);
    });
  }, []);*/

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        setUserData(user);
        setLogged(true);
        console.log(`${user?.email}sapo`);
      } else {
        console.log(`${user?.email}sapo`);
      }
    });
  }, [userData]);

  const USER_INITIAL_VALUE: IUserContext = {
    userData,
    setUserData,
    Logged,
    setLogged,
    isLoading,
    setIsLoading,
    data: userData,
  };
  return <Provider value={USER_INITIAL_VALUE}>{children}</Provider>;
};

export default userContext;
