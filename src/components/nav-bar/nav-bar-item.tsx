import React, { FC } from 'react';

import { ListItem } from '../../elements';

const NavBarItem: FC = (props) => (
  <ListItem
    px="L"
    cursor="pointer"
    fontSize="1rem"
    py={['M', 'L']}
    {...props}
  />
);
export default NavBarItem;
