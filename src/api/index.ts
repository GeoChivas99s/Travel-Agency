import { SignInProps, SignUpProps } from './api.types';
import firebase from './config';

export const SignIn: SignInProps = (email, password): boolean => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Bem-Vindo');
      return true;
    })
    .catch((e) => {
      alert(e);
      return false;
    });
  return false;
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
