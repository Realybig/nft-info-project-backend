import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 加入公共路径
  // app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
