import React, { FC } from 'react';

import { FlexView, Input, Text } from '../../elements';

const NavSearch: FC = () => {
  return (
    <>
      <FlexView p="5px" ml="25px" width="90vw" mt="20px" flexDirection="column">
        <Input placeholder="Pesquisar" />
        <Text fontSize="1.5rem" color="normal" ml="10px">
          {' '}
          Principais Resultados 328 lugares »»{' '}
        </Text>
      </FlexView>
    </>
  );
};
export default NavSearch;
