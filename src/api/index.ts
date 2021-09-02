import { useHistory } from 'react-router';

import { useUser } from '../hooks';
import { SignInProps, SignUpProps } from './api.types';
import firebase from './config';

export const SignIn: SignInProps = (email, password): void => {
  const { setUserData } = useUser();
  const { push } = useHistory();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      alert('Bem-Vindo');
      setUserData({ email: email, password: password });
      push('/home');
    })
    .catch((e) => {
      alert(e);
    });
};

export const SignOut = (): void => {
  firebase.auth().signOut();
};

export const SignUpFirebase: SignUpProps = (email, password, number): void => {
  try {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert(`${email} cadastrado com sucesso`);
      })
      .catch((e) => {
        alert(e);
      });
  } catch (error) {
    alert(error);
  }
};
