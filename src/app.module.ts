import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EjemploGetController } from './controllers/ejemplo-get/ejemplo-get.controller';

@Module({
  imports: [],
  controllers: [AppController, EjemploGetController],
  providers: [AppService],
})
export class AppModule {}
