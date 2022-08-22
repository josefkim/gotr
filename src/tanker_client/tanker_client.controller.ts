import { Controller, Get, Logger, Param } from '@nestjs/common';
import { TankerClientService } from './tanker_client.service';
import { GasstationDto } from './dto/gasstation-dto';
import { AxiosResponse } from 'axios';
import { TankerClientModule } from './tanker_client.module';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

@Controller('tankerClient')
export class TankerClientController {
  private readonly logger = new Logger(TankerClientController.name);

  constructor(private readonly tanker_clientService: TankerClientService) {}

  @Get([':longitude/:latitude/:radius'])
  @ApiParam({
    name: 'radius',
    example: 5,
    required: true,
    description: 'search radius of gasstation',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  @ApiParam({
    name: 'longitude',
    example: 9.359363,
    required: true,
    description: 'search radius of gasstation',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  @ApiParam({
    name: 'latitude',
    example: 48.790375,
    required: true,
    description: 'search radius of gasstation',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  @ApiOperation({ summary: 'Simple Get Call to Tanker König Api' })
  async getGasstation(
    @Param('longitude') longitude: number,
    @Param('latitude') latitude: number,
    @Param('radius') radius: number,
  ): Promise<AxiosResponse<any> | GasstationDto> {
    this.logger.log(
      `start getGasstation with params longitude: ${longitude} latitude: ${latitude} radius: ${radius}`,
    );

    const response = await this.tanker_clientService
      .getAllInRadius(latitude, longitude, radius)
      .then((response) => {
        return response;
      });
    this.logger.debug(`send request back: ${JSON.stringify(response)}`);
    this.logger.log(`end getGasstation`);
    return response;
  }
}
