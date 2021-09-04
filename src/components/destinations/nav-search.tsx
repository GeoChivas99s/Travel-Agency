import React, { FC } from 'react';

import { FlexView, Input } from '../../elements';

const NavSearch: FC = () => {
  return (
    <FlexView p="5px" ml="25px" width="90vw" mt="20px">
      <Input placeholder="Pesquisar" />
    </FlexView>
  );
};
export default NavSearch;
