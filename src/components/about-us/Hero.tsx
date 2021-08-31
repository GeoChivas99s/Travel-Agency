import React, { FC } from 'react';

import { Text, View } from '../../elements';

const Hero: FC = () => {
  return (
    <>
      <View
        background={`url('${process.env.PUBLIC_URL}about.jpg')  center center`}
        width="100vw"
        height="65vh"
      ></View>
      <Text display="flex" color="normal" fontSize="XXL" m="50px">
        {' '}
        | Sobre Nós
      </Text>
    </>
  );
};
export default Hero;
