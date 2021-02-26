import { Users } from '../../database/entities/user.entity';

export function userValid(): Users {
  const user = new Users();
  user.email = 'email_valido@gmail.com';
  user.password = 'senhavalida';
  return user;
}
