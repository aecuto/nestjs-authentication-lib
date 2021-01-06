import { Injectable } from '@nestjs/common';

@Injectable()
export class MainApiService {
  getHello(): string {
    return 'main2 Hello World!';
  }

  getPrivateMessage(): string {
    return 'this login and get correctly message!';
  }
}
