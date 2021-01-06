import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { MainApiService } from './main-api.service';
import { MyAuthService } from '@app/my-auth';
import { JwtAuthGuard } from '@app/my-auth/jwt-auth.guard';
import { LocalAuthGuard } from '@app/my-auth/local-auth.guard';
@Controller()
export class MainApiController {
  constructor(
    private readonly mainApiService: MainApiService,
    private readonly myAuthService: MyAuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.mainApiService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.myAuthService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('private')
  async private() {
    return this.mainApiService.getPrivateMessage();
  }
}
