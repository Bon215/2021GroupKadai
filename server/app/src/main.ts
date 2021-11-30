import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: false
  });
  app.useLogger(app.get(Logger))

  app.enableCors()

  // const configService = app.get(ConfigService)
  // const port = configService.get('server').port || 3000
  await app.listen(3000);
  console.log(`server running on ${await app.getUrl()}`)
}
bootstrap();
