import { NestFactory } from '@nestjs/core';
import { FrontApiModule } from './front-api.module';

async function bootstrap() {
  const app = await NestFactory.create(FrontApiModule);
  await app.listen(3000);
}
bootstrap();
