import { Dispatch, SetStateAction } from 'react';

export interface IUser {
  email: string;
  password: string;
}

export interface IUserContext {
  userData: IUser | null;
  setUserData: Dispatch<SetStateAction<IUser | null>>;
  Logged: boolean | null | undefined;
  setLogged: Dispatch<SetStateAction<boolean | null | undefined>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  data: IUser | null;
}
