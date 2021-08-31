import React, { FC } from 'react';

import { Hero, Layout, NavBar } from '../components';

const Home: FC = () => (
  <Layout pageTitle="About">
    <NavBar />
    <Hero />
  </Layout>
);

export default Home;
