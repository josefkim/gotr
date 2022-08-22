import { Test, TestingModule } from '@nestjs/testing';
import { TankerClientController } from './tanker_client.controller';

describe('TankerClientController', () => {
  let controller: TankerClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TankerClientController],
    }).compile();

    controller = module.get<TankerClientController>(TankerClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
