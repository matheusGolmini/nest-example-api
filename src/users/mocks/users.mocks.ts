import { Users } from '../entities/user.entity';

export function userValid(): Users {
  const user = new Users();
  user.email = 'email_valido@gmail.com';
  user.name = 'nome valido';
  user.password = 'senhavalida';
  user.phone = 'teelefone valido';
  return user;
}
