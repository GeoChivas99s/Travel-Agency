import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Routes, RoutesEnum } from '../../constants/routes';
import { FlexView, List } from '../../elements';
import ListMenuItemsProps from './nav-bar.types';
import NavBarItem from './nav-bar-items';

// eslint-disable-next-line react/prop-types
const ListMenuItems: FC<ListMenuItemsProps> = () => {
  return (
    <FlexView
      p="XXL"
      left="0"
      mt="XXL"
      width="100vw"
      background="cyan"
      position="absolute"
      flexDirection="column"
      height="100%"
      display="flex"
      overflowY="hidden"
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
