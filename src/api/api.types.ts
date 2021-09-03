export type SignInProps = (email: string, password: string) => boolean;

export type SignUpProps = (
  email: string,
  password: string,
  number: number
) => void;
