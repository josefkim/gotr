import { Test, TestingModule } from '@nestjs/testing';
import { TankerClientService } from './tanker_client.service';

describe('TankerClientService', () => {
  let service: TankerClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TankerClientService],
    }).compile();

    service = module.get<TankerClientService>(TankerClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllInRadium', () => {
    it('should send the correct request to the tanker konig api', () => {
      expect(urlSpy).toHaveBeenCalledTimes(1);
      expect(urlSpy).toHaveBeenCalledWith(latitude, longitutde, radius);
    });
  });
});
