import * as Yup from 'yup';

export class SignInData {

  constructor(readonly email: string, readonly password: string) {}

  static empty(): SignInData {
    return new SignInData('', '');
  }
}

export const SignInDataSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required()
});

