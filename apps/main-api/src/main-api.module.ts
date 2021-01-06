import { Module } from '@nestjs/common';
import { MainApiController } from './main-api.controller';
import { MainApiService } from './main-api.service';
import { MyAuthModule } from '@app/my-auth';
@Module({
  imports: [MyAuthModule],
  controllers: [MainApiController],
  providers: [MainApiService],
})
export class MainApiModule {}
