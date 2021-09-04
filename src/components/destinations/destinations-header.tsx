import React, { FC } from 'react';

import { Text, View } from '../../elements';

const DestinationsHero: FC = () => {
  return (
    <View
      backgroundColor="footer"
      width="100vw"
      height="30vh"
      color="foreground"
    >
      <Text
        fontSize={['2rem', '2.5rem', '3rem']}
        mt={['100px', '120px', '130px']}
        ml="40px"
        position="absolute"
        color="accent_green"
      >
        Destinations
      </Text>
    </View>
  );
};
export default DestinationsHero;
