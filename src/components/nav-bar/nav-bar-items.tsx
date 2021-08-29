
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { List, Text } from '../../elements';
import NavBarItem from './nav-bar-item';

const ListMenuItems: FC = () => {


  return (
    <List
      px="1rem"
      display="flex"
      alignItems="center"
      overflowY={['hidden', 'unset', 'unset']}
      flexDirection={['column', 'column', 'unset']}
    >
      <NavBarItem>
uuwu
      </NavBarItem>
      <NavBarItem>
uuwu
      </NavBarItem>
      <NavBarItem>
uuwu
      </NavBarItem>
      <NavBarItem>
uuwu
      </NavBarItem>
    </List>
  );
};

export default ListMenuItems;