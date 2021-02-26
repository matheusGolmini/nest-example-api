import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { configDatabase } from './database/config.data';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(configDatabase)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
