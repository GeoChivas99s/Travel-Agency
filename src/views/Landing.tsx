import React, { FC } from 'react';

import {
  FeaturedDestinations,
  Layout,
  LearnMore,
  Logo,
  NavBar,
  TravelExplore,
} from '../components';

const Home: FC = () => (
  <Layout pageTitle="Home">
    <NavBar />
    <TravelExplore />
    <LearnMore />
    <FeaturedDestinations />
  </Layout>
);

export default Home;
