import React, { FC, useState } from 'react';
import * as Icons from 'react-icons/ai';
import * as Icon from 'react-icons/fa';

import { FlexView, Text } from '../../elements';
import ListMenuItems from './list-menu-items';

const MobileMenu: FC = () => {
  const [isOpen, setIsopen] = useState(false);
  const toogleIsopen = () => {
    setIsopen(!isOpen);
  };
  return (
    <FlexView display={['flex', 'flex', 'none']} flexDirection="column">
      <FlexView
        px="0"
        py="1rem"
        gap="S"
        height="100%"
        cursor="pointer"
        onClick={toogleIsopen}
        flexDirection="column"
      >
        <Text fontSize="XL">
          {' '}
          {isOpen ? <Icons.AiOutlineClose /> : <Icon.FaBars />}
        </Text>
      </FlexView>

      {isOpen && <ListMenuItems />}
    </FlexView>
  );
};
export default MobileMenu;
