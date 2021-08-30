import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { FlexView, Image, View } from '../../elements';
import { useEventListener } from '../../hooks';
import MobileMenu from './mobile-menu';
import NavBarItems from './nav-bar-items';
const NavBar: FC = () => {
  const [colorChange, setcolorChange] = useState<string | null>('');
  return (
    <>
      {useEventListener('scroll', () => {
        if (window.scrollY >= 80) {
          setcolorChange('#FEC38A');
        } else {
          setcolorChange('');
        }
      })}

      <FlexView
        width="100%"
        justifyContent="space-between"
        background={colorChange}
        padding="6px"
        position="fixed"
        height="60px"
      >
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
    </>
  );
};
export default NavBar;
