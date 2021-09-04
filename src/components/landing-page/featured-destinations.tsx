import React, { FC } from 'react';
import { v4 } from 'uuid';

import { FlexView, Text } from '../../elements';
import ImageCard from '../image-card';
import { data } from './destinations-data';

const FeaturedDestinations: FC = () => {
  return (
    <FlexView alignItems="center" mt="20px" width="100%" flexDirection="column">
      <FlexView justifyContent="space-between" width="85%" mb="20px">
        <Text fontSize="XXL">Featured destinations</Text>
        <Text color="normal" style={{ cursor: 'pointer' }}>
          View all »»
        </Text>
      </FlexView>
      <FlexView
        justifyContent="space-between"
        flexDirection={['column', 'column', 'row']}
        width="90%"
        alignItems="center"
      >
        {data.map((item) => {
          return (
            <ImageCard
              key={v4()}
              title={item.title}
              country={item.country}
              image={item.image}
            />
          );
        })}
      </FlexView>
    </FlexView>
  );
};

export default FeaturedDestinations;
