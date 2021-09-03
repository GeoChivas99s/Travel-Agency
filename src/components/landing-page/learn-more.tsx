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
      <View zIndex={-1} width={['350px', '300px', '490px']}>
        <Image src={`${process.env.PUBLIC_URL}ballon.png`} width="100%" />
      </View>
      <FlexView
        flexDirection="column"
        justifyContent="space-between"
        p="0px 30px 30px 30px "
        width={['100%', '100%', '30%']}
        height="40vh"
      >
        <Text fontSize="XXL">A New way to explore the world</Text>
        <Text>
          For decades travellers have reached for Lonely Planet books when
          looking to plan and execute their perfect trip, but now, they can also
          let Lonely Planet Experiences lead the way
        </Text>
        <Button
          variant="secundary"
          p="8px"
          display="flex"
          alignSelf={['flex-end', 'unset', 'unset']}
          mt="20px"
          style={{ transition: '0.3s' }}
          textAlign="center"
          zIndex={1}
        >
          <Text>Learn more</Text>
        </Button>
      </FlexView>
    </FlexView>
  );
};

export default LearnMore;
