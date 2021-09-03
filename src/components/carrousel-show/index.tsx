import React, { FC } from 'react';

import Carrousel from '../carrousel/index';
import CarrouselShowBody from './carrousel-show-body';
import { carrouselImages } from './carrousel-show-images';

const CarrouselShow: FC = () => {
  return (
    <Carrousel>
      <CarrouselShowBody tittle="Moscana" image={carrouselImages.i1} />
      <CarrouselShowBody tittle="Grécia" image={carrouselImages.i2} />
      <CarrouselShowBody tittle="Morro do Moco" image={carrouselImages.i3} />
      <CarrouselShowBody tittle="Ilha do Mussulo" image={carrouselImages.i4} />
    </Carrousel>
  );
};
export default CarrouselShow;
