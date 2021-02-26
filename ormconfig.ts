module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  migrationsRun: true,
  migrationsTableName: 'migrations',
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*{.ts,.js}'],
  entityPrefix: 'wtp_',
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  seeds: ['src/**/*.seed{.ts,.js}'],
  factories: ['src/**/*.factory{.ts,.js}'],
};
