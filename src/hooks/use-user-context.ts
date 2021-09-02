import { useContext } from 'react';

import userContext from '../context/user';
import { IUserContext } from '../context/user.types';

const useUser = (): IUserContext => useContext(userContext);

export default useUser;
