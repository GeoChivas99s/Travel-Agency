import React, { FC } from 'react';

import { FlexView, Image, Text } from '../../elements';
import { CarrouselShowBodyProps } from './carousel-show.types';

// eslint-disable-next-line react/prop-types
const CarrouselShowBody: FC<CarrouselShowBodyProps> = ({ tittle, image }) => {
  return (
    <FlexView
      height={['50rem']}
      justifyContent={['center']}
      alignItems={['center']}
      backgroundSize={['cover']}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Text color="text" fontSize={['1.5rem']}>
        {tittle}
      </Text>
    </FlexView>
  );
};

export default CarrouselShowBody;
