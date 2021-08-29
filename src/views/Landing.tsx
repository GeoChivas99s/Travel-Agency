import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Logo, NavBar } from '../components';
import { Routes, RoutesEnum } from '../constants/routes';
import { View } from '../elements';

const Home: FC = () => (
  <Layout pageTitle="Home">
    <NavBar />
  </Layout>
);

export default Home;
