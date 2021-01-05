import { Test, TestingModule } from '@nestjs/testing';
import { FrontApiController } from './front-api.controller';
import { FrontApiService } from './front-api.service';

describe('FrontApiController', () => {
  let frontApiController: FrontApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FrontApiController],
      providers: [FrontApiService],
    }).compile();

    frontApiController = app.get<FrontApiController>(FrontApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(frontApiController.getHello()).toBe('Hello World!');
    });
  });
});
