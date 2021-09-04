import { FC } from 'react';

import { RoutesEnum } from '../constants/routes';
import AboutUS from '../views/AboutUs';
import Destinations from '../views/Destinations';
import Home from '../views/Landing';
import Login from '../views/Login';
import SignUpView from '../views/SignUp';

export const RouteComponent: Record<RoutesEnum, FC> = {
  [RoutesEnum.Home]: Home,
  [RoutesEnum.Login]: Login,
  [RoutesEnum.AboutUS]: AboutUS,
  [RoutesEnum.SignUp]: SignUpView,
  [RoutesEnum.Destinations]: Destinations,
};
