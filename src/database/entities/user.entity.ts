import { Column, Entity } from 'typeorm';
import DefaultAttributes from './default.entity';

@Entity('users')
export class Users extends DefaultAttributes {
  @Column()
  email: string;

  @Column()
  password: string;
}
