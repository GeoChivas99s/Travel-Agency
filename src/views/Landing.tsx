import React, { FC } from 'react';

import {
  FeaturedDestinations,
  Footer,
  Guides,
  Layout,
  LearnMore,
  NavBar,
  TravelExplore,
} from '../components';

const Home: FC = () => (
  <Layout pageTitle="Home">
    <NavBar />
    <TravelExplore />
    <LearnMore />
    <FeaturedDestinations />
    <Guides />
    <Footer />
  </Layout>
);

export default Home;
