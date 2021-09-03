/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, FormEvent, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { SignUpFirebase } from '../../api/index';
import { Routes, RoutesEnum } from '../../constants/routes';
import { Button, FlexView, Form, Image, Input, Text } from '../../elements';
import { useUser } from '../../hooks';

const SignUp: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');
  const [number] = useState<number>(0);
  const { Logged } = useUser();
  const handleEmail = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };
  const handlePassword = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };
  const handleSubmit = () => {
    SignUpFirebase(email, password, number);
  };

  return (
    <>
      {Logged ? (
        <Redirect to="/home" />
      ) : (
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
                onChange={handleEmail}
              />
              <Input type="tel" placeholder="phone number" required />
              <Input
                type="password"
                placeholder="password"
                required
                onChange={handlePassword}
              />
              <Button
                variant="secundary"
                width="50%"
                p="10px"
                mb="10px"
                onClick={handleSubmit}
              >
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
            </Form>
          </FlexView>
        </FlexView>
      )}
    </>
  );
};

export default SignUp;
