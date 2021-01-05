import { Module } from '@nestjs/common';
import { MyAuthService } from './my-auth.service';

@Module({
  providers: [MyAuthService],
  exports: [MyAuthService],
})
export class MyAuthModule {}
