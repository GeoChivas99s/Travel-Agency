import React, { FC } from 'react';

import {
  CarrouselShow,
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
    <CarrouselShow />
    <Footer />
  </Layout>
);

export default Home;
