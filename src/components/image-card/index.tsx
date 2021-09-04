/* eslint-disable react/prop-types */
import React, { FC, useState } from 'react';
import * as Icon from 'react-icons/ai';

import { Text, View } from '../../elements';
import Card from './card.styles';
import ImageCardProps from './image-card.types';

const ImageCard: FC<ImageCardProps> = ({ title, country, image }) => {
  const [favorite, setFavorite] = useState<boolean>(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
    favorite
      ? alert('removido dos favoritos')
      : alert('adicionado aos favoritos');
  };
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
      {favorite ? (
        <Icon.AiFillHeart className="icon" onClick={handleFavorite} />
      ) : (
        <Icon.AiOutlineHeart className="icon" onClick={handleFavorite} />
      )}
    </Card>
  );
};
export default ImageCard;
