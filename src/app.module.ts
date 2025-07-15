import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from '../../nomadia/src/';
import { DatabaseModule } from '@app/common/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
