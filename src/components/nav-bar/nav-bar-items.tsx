import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button, List, Text } from '../../elements';
import NavBarItem from './nav-bar-item';

const NavBarItems: FC = (props) => {
  return (
    <List
      px="1rem"
      marginRight="60px"
      alignItems="center"
      overflowY={['hidden', 'unset', 'unset']}
      display={['none', 'none', 'flex']}
    >
      <NavBarItem>
        <Link to="/">
          <Text> Home </Text>
        </Link>
      </NavBarItem>
      <NavBarItem>
        <Link to="/">
          <Text> Destinos </Text>
        </Link>
      </NavBarItem>
      <NavBarItem>
        <Link to="/">
          <Text> Sobre Nós </Text>
        </Link>
      </NavBarItem>
      <NavBarItem>
        <Link to="/">
          <Text> Parceiros </Text>
        </Link>
      </NavBarItem>
      <NavBarItem>
        <Button variant="primary">
          <Text>Login</Text>
        </Button>
      </NavBarItem>
      <NavBarItem>
        <Button variant="secundary">
          <Text>Registar-se</Text>
        </Button>
      </NavBarItem>
    </List>
  );
};

export default NavBarItems;
