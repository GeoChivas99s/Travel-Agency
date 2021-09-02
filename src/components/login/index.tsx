import React, { FC, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { SignIn } from '../../api';
import { Routes, RoutesEnum } from '../../constants/routes';
import { Button, FlexView, Form, Image, Input, Text } from '../../elements';
import { useUser } from '../../hooks';
const LoginBody: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { Logged } = useUser();

  const handleEmail = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const handlePassword = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const handleSubmit = () => {
    SignIn(email, password);
  };

  return (
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
            <Image
              className="bounce"
              src={`${process.env.PUBLIC_URL}logo.png`}
            />
          </Link>

          <Text fontSize="XXL">Travel App</Text>
        </FlexView>
        <Form
          display="flex"
          width="100%"
          style={{ flexDirection: 'column', alignItems: 'center' }}
          onSubmit={(e: any) => e.preventDefault()}
        >
          <Input
            type="email"
            placeholder="your Email"
            required
            name="email"
            onChange={handleEmail}
          />
          <Input
            type="password"
            placeholder="password"
            required
            name="password"
            onChange={handlePassword}
          />
          <Button
            variant="secundary"
            width="50%"
            p="10px"
            mb="10px"
            onClick={handleSubmit}
          >
            <Text> Entrar </Text>
          </Button>
          <Button variant="primary" width="50%" p="10px" mb="10px">
            <Link to={Routes[RoutesEnum.SignUp]}>
              <Text color="normal"> Registar-se </Text>{' '}
            </Link>
          </Button>

          <Text>Forgot password?</Text>
        </Form>
      </FlexView>
    </FlexView>
  );
};

export default LoginBody;
