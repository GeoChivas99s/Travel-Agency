import { Dispatch, SetStateAction } from 'react';

export interface IUser {
  email: string;
  password: string;
}

export interface IUserContext {
  userData: IUser | null;
  setUserData: Dispatch<SetStateAction<IUser | null>>;
  Logged: unknown;
  setLogged: Dispatch<SetStateAction<unknown>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  data: IUser | null;
}
