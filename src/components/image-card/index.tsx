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
          fontSize={['1.1rem']}
          width="45%"
          height="3rem"
          backgroundColor="#1ABE84"
          color="foreground"
          textAlign="center"
          borderBottomRightRadius="5px"
          p="3px"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Text>{title}</Text>
          {country}
        </Text>
      </View>
    </Card>
  );
};
export default ImageCard;
