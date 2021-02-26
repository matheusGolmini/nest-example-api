import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Users } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { UsersRepository } from './repositories/users-repository';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  const token = getRepositoryToken(Users);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        UsersRepository,
        {
          provide: token,
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
