import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { UsersModule } from './users.module';
import { PORT } from './constants';

(async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  app.useGlobalPipes(new ValidationPipe());
  const options = {
    origin: 'http://localhost:4000',
    credentials: true
  };
  app.enableCors(options);
  await app.listen(PORT);
})();
