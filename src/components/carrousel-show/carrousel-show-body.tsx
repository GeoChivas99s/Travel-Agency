import React, { FC } from 'react';

import { FlexView, Text } from '../../elements';
import { CarrouselShowBodyProps } from './carousel-show.types';

// eslint-disable-next-line react/prop-types
const CarrouselShowBody: FC<CarrouselShowBodyProps> = ({ tittle, image }) => {
  return (
    <FlexView
      height={['25rem']}
      justifyContent={['center']}
      alignItems={['center']}
      backgroundSize={['cover']}
      m="5px"
      style={{
        backgroundImage: `url(${image})`,
        objectFit: 'cover',
        backgroundPosition: 'center',
        borderRadius: '3px',
        backgroundClip: 'cover',
      }}
    >
      <Text
        color="foreground"
        fontSize={['1.3rem']}
        backgroundColor="normal"
        borderRadius="5px"
        textAlign="center"
        width={['100px', '200px', '250px']}
        position="absolute"
        bottom="0"
      >
        {tittle}
      </Text>
    </FlexView>
  );
};

export default CarrouselShowBody;
