import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Routes, RoutesEnum } from '../../constants/routes';
import { Button, FlexView, Image, Input, Text } from '../../elements';

const SignUp: FC = () => (
  <FlexView
    background="#FAC38A"
    width="100vw"
    height="100vh"
    flexDirection="column"
  >
    <FlexView
      borderRadius="10px"
      backgroundColor="foreground"
      width={['80%', '40%', '40%']}
      height="70%"
      alignSelf="center"
      marginTop={['10%', '5%', '5%']}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      p="10px"
    >
      <FlexView mb="40px" alignItems="center">
        <Link to={Routes[RoutesEnum.Home]}>
          <Image className="bounce" src={`${process.env.PUBLIC_URL}logo.png`} />
        </Link>

        <Text fontSize="XXL">Travel App</Text>
      </FlexView>

      <Input type="email" placeholder="your Email" required />
      <Input type="tel" placeholder="phone number" required />
      <Input type="password" placeholder="password" required />
      <Button variant="secundary" width="50%" p="10px" mb="10px">
        <Text> Registar-se </Text>
      </Button>
      <Button variant="primary" width="50%" p="10px" mb="10px">
        <Link to={Routes[RoutesEnum.Login]}>
          <Text color="normal"> Entrar </Text>{' '}
        </Link>
      </Button>

      <Text fontSize="0.8rem" color="background">
        @chivas99s
      </Text>
    </FlexView>
  </FlexView>
);

export default SignUp;
