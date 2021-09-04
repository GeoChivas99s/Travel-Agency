/* eslint-disable react/prop-types */
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { Routes, RoutesEnum } from '../../constants/routes';
import { Button, List, Text } from '../../elements';
import { useUser } from '../../hooks/index';
import DropdownMenu from './dropdown-menu';
import NavbarItemsProps from './nav-bar.types';
import NavBarItem from './nav-bar-item';

const NavBarItems: FC<NavbarItemsProps> = ({ isScroll }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { Logged } = useUser();

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
          <Text color={isScroll ? 'foreground' : ''}> Home </Text>
        </Link>
      </NavBarItem>
      <NavBarItem>
        <Link to={Routes[RoutesEnum.Destinations]}>
          <Text color={isScroll ? 'foreground' : ''}> Destinos </Text>
        </Link>
      </NavBarItem>
      <NavBarItem>
        <Link to={Routes[RoutesEnum.AboutUS]}>
          <Text color={isScroll ? 'foreground' : ''}> Sobre Nós </Text>
        </Link>
      </NavBarItem>
      <NavBarItem>
        <Text color={isScroll ? 'foreground' : ''}> Parceiros</Text>
      </NavBarItem>
      {Logged && (
        <NavBarItem>
          <Text
            onClick={() => setOpenMenu(!openMenu)}
            border="solid"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}asta.jpg)`,
              backgroundSize: 'cover',
              width: '40px',
              height: '40px',
              borderRadius: '20px',
            }}
          ></Text>
        </NavBarItem>
      )}

      {openMenu && (
        <NavBarItem>
          <DropdownMenu />
        </NavBarItem>
      )}

      {Logged ? (
        <> </>
      ) : (
        <>
          <NavBarItem>
            <Button variant="primary">
              <Link to={Routes[RoutesEnum.Login]}>
                <Text color="normal">Login</Text>
              </Link>
            </Button>
          </NavBarItem>
          <NavBarItem>
            <Button variant="secundary">
              <Link to={Routes[RoutesEnum.SignUp]}>
                <Text color="foreground">Registar-se</Text>
              </Link>
            </Button>
          </NavBarItem>
        </>
      )}
    </List>
  );
};

export default NavBarItems;
