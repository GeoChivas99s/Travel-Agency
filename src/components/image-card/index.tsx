/* eslint-disable react/prop-types */
import React, { FC } from 'react';

import { FlexView, Image, Text, View } from '../../elements';
import ImageCardProps from './image-card.types';

const ImageCard: FC<ImageCardProps> = ({ title, country, image }) => {
  return (
    <FlexView m="10px" flexDirection="column" borderRadius="5px">
      <Image src={image} width="100%" height="100%" borderRadius="5px" />

      <View height="50px" position="relative">
        <Text>{title}</Text>
        <Text>{country}</Text>
      </View>
    </FlexView>
  );
};
export default ImageCard;
