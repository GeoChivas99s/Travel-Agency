import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { FlexView, Image, View } from '../../elements';
import MobileMenu from './mobile-menu';
import NavBarItems from './nav-bar-items';

const NavBar: FC = () => {
  return (
    <FlexView width="100wh" justifyContent="space-between" padding="6px">
      <FlexView width="50px" marginLeft="20px">
        <Link
          style={{ textDecoration: 'none', color: 'black', padding: '5px' }}
          to="/"
        >
          <Image src={`${process.env.PUBLIC_URL}logo.png`} width="100%" />
        </Link>
      </FlexView>
      <NavBarItems />
      <MobileMenu />
    </FlexView>
  );
};
export default NavBar;
