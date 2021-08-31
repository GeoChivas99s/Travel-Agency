import './style.css';

import React, { FC } from 'react';

import { Button, FlexView, Image, Text, View } from '../../elements';

const LearnMore: FC = () => {
  return (
    <FlexView
      justifyContent="space-around"
      py="50px"
      flexDirection={['column', 'column', 'row']}
      alignItems="center"
      overflowY={['hidden', 'unset', 'unset']}
    >
      <FlexView
        flexDirection="column"
        justifyContent="space-between"
        p="0px 30px 30px 30px "
        width={['100%', '100%', '30%']}
        height="40vh"
        mb="60px"
      >
        <Text fontSize="XXL">Guides by Thousand Sunny</Text>
        <Text>
          Packed with tips and advice from our on-the-ground experts, our city
          guides app (iOS and Android) is the ultimate resource before and
          during a trip.
        </Text>
        <Button
          variant="secundary"
          p="5px"
          display="flex"
          alignSelf={['flex-end', 'unset', 'unset']}
          mt="10px"
          style={{ transition: '0.3s' }}
        >
          <Text>Download »» </Text>
        </Button>
      </FlexView>
      <View width={['320px', '300px', '490px']} className="bounce" zIndex={-1}>
        <Image src={`${process.env.PUBLIC_URL}ballon.png`} width="100%" />
      </View>
    </FlexView>
  );
};

export default LearnMore;
