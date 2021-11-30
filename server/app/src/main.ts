import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors()

  const configService = app.get(ConfigService)
  await app.listen(configService.get('server').port || 3000);
  console.log(`server running on ${await app.getUrl()}`)
}
bootstrap();
