import React, { FC } from 'react';

import {
  DestinationsGalery,
  DestinationsHero,
  Layout,
  NavBar,
  NavSearch,
} from '../components';

const Destinations: FC = () => (
  <Layout pageTitle="Destinations">
    <NavBar />
    <DestinationsHero />
    <NavSearch />
    <DestinationsGalery />
  </Layout>
);

export default Destinations;
