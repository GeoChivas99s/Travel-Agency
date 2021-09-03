/* eslint-disable react/prop-types */
import React, { FC } from 'react';

import { ListItem } from '../../elements';

const DropdownItem: FC<DropdownItemProps> = ({ children, tittle }) => {
  return (
    <ListItem color="foreground" width="100%" fontSize={['2rem']}>
      {children} {tittle}
    </ListItem>
  );
};

export default DropdownItem;
interface DropdownItemProps {
  tittle?: string;
}
