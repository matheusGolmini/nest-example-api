import { Users } from '../../database/entities/user.entity';

export function userValid(): Users {
  const user = new Users();
  user.email = 'email_valido@gmail.com';
  user.password = 'senhavalida';
  user.id = '68c05085-58e7-49e4-aebc-01e347a7b393';
  return user;
}
