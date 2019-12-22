import * as Yup from 'yup';

export class SignUpData {

  constructor(readonly email: string, readonly password: string, readonly username: string) {}

  static empty(): SignUpData {
    return new SignUpData('', '', '');
  }
}

export const SignUpDataSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required(),
  username: Yup.string().min(2, 'Username must be at least 2 characters').required()
});

