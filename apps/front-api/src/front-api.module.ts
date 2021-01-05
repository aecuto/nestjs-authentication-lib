import { Module } from '@nestjs/common';
import { FrontApiController } from './front-api.controller';
import { FrontApiService } from './front-api.service';

@Module({
  imports: [],
  controllers: [FrontApiController],
  providers: [FrontApiService],
})
export class FrontApiModule {}
