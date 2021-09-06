/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import React, { FC } from 'react';
import { v4 } from 'uuid';

import { FlexView } from '../../elements';
import DestinationsGaleryData from './destinations-galery-data';

const DestinationsGalery: FC = () => {
  return (
    <ListImage
      flexDirection={['row']}
      width="95vw"
      m="0 auto"
      height="100vh"
      mt="50px"
    >
      {DestinationsGaleryData.map((item) => {
        return (
          <FlexView
            backgroundImage={`url(${item.image})`}
            key={v4()}
            backgroundSize="cover"
            className={item.id}
            flexBasis={['100%', '', '']}
          />
        );
      })}
    </ListImage>
  );
};

export default DestinationsGalery;

const ListImage = styled(FlexView)<any>`
  display: flex;
  flex-wrap: wrap;

  .large {
    flex-basis: 60%;
  }
  .small {
    flex-basis: 35%;
  }

  & > div {
    margin: 10px;
    height: 350px;
    padding: 20px;
    transition: 0.7s transform;
    background-size: cover;
    object-fit: cover;

    :hover {
      transform: scale(1.1);
    }
  }
`;
