import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { FlexView, List } from '../../elements';

const ListMenuItems: FC = () => {
  return (
    <FlexView
      p="XXL"
      left="0"
      mt="XXL"
      width="100vw"
      background="#FAC38A"
      position="absolute"
      flexDirection="column"
      height="100vh"
      display="flex"
      overflowY="hidden"
      zIndex={10}
      style={{ transition: '2s' }}
    >
      <List
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Link to="" style={{ padding: '10px' }}>
          Home
        </Link>
        <Link to="" style={{ padding: '10px' }}>
          Destinos
        </Link>
        <Link to="" style={{ padding: '10px' }}>
          Sobre Nós
        </Link>
        <Link to="" style={{ padding: '10px' }}>
          Parceiros
        </Link>
      </List>
    </FlexView>
  );
};

export default ListMenuItems;
