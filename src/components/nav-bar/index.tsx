import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { FlexView, Image,View  } from '../../elements';
import NavBarItems from './nav-bar-items';

const NavBar: FC = () => {
  return <FlexView width="100wh"
    justifyContent="space-between"
  >
   
    <View>
      <Link style={{textDecoration: 'none' ,color : 'black'}} to='/'>
        <Image />
      </Link>
    </View>
    <NavBarItems />

  </FlexView>;
};
export default NavBar;
