import { Controller, Get } from '@nestjs/common';
import { FrontApiService } from './front-api.service';

@Controller()
export class FrontApiController {
  constructor(private readonly frontApiService: FrontApiService) {}

  @Get()
  getHello(): string {
    return this.frontApiService.getHello();
  }
}
