import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { FlexView, Image } from '../../elements';
import { useEventListener } from '../../hooks';
import MobileMenu from './mobile-menu';
import NavBarItems from './nav-bar-items';

const NavBar: FC = (props) => {
  const [colorChange, setcolorChange] = useState<string | null>('');
  const [textChange, setTextChange] = useState<boolean>(false);

  return (
    <>
      {useEventListener('scroll', () => {
        if (window.scrollY >= 80) {
          setcolorChange('#1ABE84');
          setTextChange(true);
        } else {
          setcolorChange('');
          setTextChange(false);
        }
      })}

      <FlexView
        width="100%"
        justifyContent="space-between"
        background={colorChange}
        padding="6px"
        position="fixed"
        height="60px"
        zIndex={10}
        style={{ transition: '.9s' }}
        {...props}
      >
        <FlexView width="50px" marginLeft="20px">
          <Link
            style={{ textDecoration: 'none', color: 'black', padding: '5px' }}
            to="/"
          >
            <Image src={`${process.env.PUBLIC_URL}logo.png`} width="100%" />
          </Link>
        </FlexView>
        <NavBarItems isScroll={textChange} />
        <MobileMenu />
      </FlexView>
    </>
  );
};
export default NavBar;
