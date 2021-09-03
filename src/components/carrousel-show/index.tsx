import React, { FC } from 'react';

import Carrousel from '../carrousel/index';
import CarrouselShowBody from './carrousel-show-body';
import { carrouselImages } from './carrousel-show-images';

const CarrouselShow: FC = () => {
  return (
    <Carrousel>
      <CarrouselShowBody tittle="sss" image={carrouselImages[1]} />
      <CarrouselShowBody tittle="sss" image={carrouselImages[1]} />
      <CarrouselShowBody tittle="sss" image={carrouselImages[1]} />
      <CarrouselShowBody tittle="sss" image={carrouselImages[1]} />
    </Carrousel>
  );
};
export default CarrouselShow;
