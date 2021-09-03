import React, { FC } from 'react';

import { SignOut } from '../../api';
import { Button, List } from '../../elements';
import { useUser } from '../../hooks';
import DropdownItem from './dropdown-item';

const DropdownMenu: FC = () => {
  const { userData, setLogged } = useUser();

  const handleLogout = () => {
    setLogged(false);
    SignOut();
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
      }}
    >
      <DropdownItem>{userData?.email}</DropdownItem>
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
