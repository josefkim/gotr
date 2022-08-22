import { HttpVersionNotSupportedException, Module } from '@nestjs/common';
import { TankerClientService } from './tanker_client.service';
import { TankerClientController } from './tanker_client.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [TankerClientService],
  controllers: [TankerClientController],
})
export class TankerClientModule {}
