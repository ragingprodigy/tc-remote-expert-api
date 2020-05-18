import { NestFactory } from '@nestjs/core';
import { get } from 'config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(+get('PORT'));
}
bootstrap();
