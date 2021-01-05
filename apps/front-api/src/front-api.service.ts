import { Injectable } from '@nestjs/common';

@Injectable()
export class FrontApiService {
  getHello(): string {
    return 'front Hello World!';
  }
}
