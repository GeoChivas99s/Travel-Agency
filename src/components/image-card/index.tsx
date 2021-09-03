/* eslint-disable react/prop-types */
import React, { FC } from 'react';

import { Text, View } from '../../elements';
import Card from './card.styles';
import ImageCardProps from './image-card.types';

const ImageCard: FC<ImageCardProps> = ({ title, country, image }) => {
  return (
    <Card image={image}>
      <View height="50px">
        <Text
          width="45%"
          height="3rem"
          backgroundColor="#eaf3f2"
          color="normal"
          textAlign="center"
          borderBottomRightRadius="5px"
          p="3px"
        >
          {title} {''}
          {country}
        </Text>
      </View>
    </Card>
  );
};
export default ImageCard;
