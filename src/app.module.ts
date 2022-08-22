import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TankerClientModule } from './tanker_client/tanker_client.module';

@Module({
  imports: [TankerClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
