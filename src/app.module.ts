import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntriesController } from './entries/entries.controller';

@Module({
  imports: [],
  controllers: [AppController, EntriesController],
  providers: [AppService],
})
export class AppModule {}
