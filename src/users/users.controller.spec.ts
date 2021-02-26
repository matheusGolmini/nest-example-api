import { Test, TestingModule } from '@nestjs/testing';
import { UsersRepository } from './repositories/users-repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userValid } from './mocks/users.mocks';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Users } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';

describe('UsersController', () => {
  let controller: UsersController;
  let repositories: UsersRepository;

  const token = getRepositoryToken(Users);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        UsersRepository,
        {
          provide: token,
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    repositories = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('check create user', () => {
    it('return 201 create user', () => {
      const userMock = userValid();
      jest.spyOn(repositories, 'create').mockReturnValue(userMock);
      expect(controller.create(userMock)).toStrictEqual(userMock);
    });
  });

  describe('check find All users', () => {
    it('return 201 create user', () => {
      const userMock = userValid();
      jest.spyOn(repositories, 'findAll').mockReturnValue([userMock, userMock]);
      expect(controller.findAll()).toStrictEqual([userMock, userMock]);
    });
  });

  describe('check findOneByEmail user', () => {
    it('return 201 create user', () => {
      const userMock = userValid();
      jest.spyOn(repositories, 'findOneByEmail').mockReturnValue(userMock);
      expect(controller.findOne(userMock.email)).toStrictEqual(userMock);
    });
  });

  describe('check delete user', () => {
    it('return 201 create user', () => {
      const userMock = userValid();
      jest.spyOn(repositories, 'remove').mockReturnValue(true);
      expect(controller.remove(userMock.email)).toStrictEqual(
        'usuário deletado',
      );
    });
  });
});
