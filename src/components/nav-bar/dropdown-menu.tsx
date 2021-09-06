import React, { FC, useState } from 'react';

import { SignOut } from '../../api';
import { Button, List, Text } from '../../elements';
import { useUser } from '../../hooks';
import DropdownItem from './dropdown-item';

const DropdownMenu: FC = () => {
  const { userData, setLogged } = useUser();
  const [open, setOopen] = useState(true);
  const handleLogout = () => {
    setLogged(false);
    SignOut();
    setOopen(!open);
  };
  return (
    <List
      style={{
        position: 'absolute',
        background: '#1ABE84',
        top: '58px',
        width: '300px',
        height: '200px',
        overflow: 'hidden',
        padding: '1rem',
        transform: 'translateX(-100%)',
        borderRadius: '10px',
        display: `${open ? 'block' : 'none'}`,
      }}
    >
      <DropdownItem>
        {' '}
        <Text fontSize="1.5rem"> {userData?.email}</Text>
      </DropdownItem>
      <DropdownItem>
        <Button
          variant="secundary"
          border="1px solid normal"
          height="30px"
          width="100%"
          mt="100px"
          onClick={handleLogout}
        >
          Terminar Sessão
        </Button>
      </DropdownItem>
    </List>
  );
};
export default DropdownMenu;
