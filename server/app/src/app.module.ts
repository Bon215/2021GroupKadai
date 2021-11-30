import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigsModule } from './config/configs.module';

@Module({
  imports: [
    ConfigsModule
  ],
  providers: [AppService],
})
export class AppModule {}
