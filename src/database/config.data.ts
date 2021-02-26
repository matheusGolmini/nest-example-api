import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { resolve } from 'path';

const configDatabase: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  entities: [resolve(__dirname, '..', '..') + '/**/*.entity{.ts,.js}'],
  logging: process.env.NODE_ENV == 'development' ? ['query', 'schema'] : [],
};

export { configDatabase };
