import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userValid } from './mocks/users.mocks';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Users } from '../database/entities/user.entity';

const mockTypeorm = {
  find: jest.fn(),
  findOne: jest.fn(),
  save: jest.fn(),
  delete: jest.fn(),
};

describe('UsersController', () => {
  let controller: UsersController;

  const token = getRepositoryToken(Users);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: token,
          useValue: mockTypeorm,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('check create user', () => {
    it('return 201 create user', async () => {
      const userMock = userValid();
      mockTypeorm.save.mockReturnValue(userMock);
      expect(await controller.create(userMock)).toStrictEqual(userMock);
    });
  });

  describe('check find All users', () => {
    it('return 200 find all users', async () => {
      const userMock = userValid();
      mockTypeorm.find.mockReturnValue([userMock, userMock]);
      expect(await controller.findAll()).toStrictEqual([userMock, userMock]);
    });
  });

  describe('check findOneByEmail user', () => {
    it('return 201 create user', async () => {
      const userMock = userValid();
      mockTypeorm.findOne.mockReturnValue(userMock);
      expect(await controller.findOne(userMock.email)).toStrictEqual(userMock);
    });
  });

  describe('check delete user', () => {
    it('return 201 create user', async () => {
      const userMock = userValid();
      mockTypeorm.delete.mockReturnValue(true);
      expect(await controller.remove(userMock.email)).toStrictEqual(
        'usuário deletado',
      );
    });
  });
});
