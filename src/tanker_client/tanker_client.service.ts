import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { TankerkoenigResponseDto } from './dto/tankerkoenig-response-dto';
import { isNumber } from '@nestjs/common/utils/shared.utils';
import { AxiosResponse } from 'axios';
import { GasstationDto } from './dto/gasstation-dto';
import { TankerClientModule } from './tanker_client.module';

@Injectable()
export class TankerClientService {
  private readonly logger = new Logger(TankerClientService.name);
  private readonly TANKER_KOENIG_URL =
    'http://creativecommons.tankerkoenig.de/json/list.php';
  private readonly API_KEY = '8ff26ac4-621c-e3ec-e0f2-0b8396a0877a';
  private readonly SORT = 'price';
  private readonly GAS_TYPE = 'diesel';

  constructor(private readonly httpService: HttpService) {}

  async getAllInRadius(
    lat: number,
    long: number,
    rad: number,
  ): Promise<AxiosResponse<TankerkoenigResponseDto>> {
    this.logger.log(
      'start service getAllInRadius lat: ' +
        lat +
        ' long: ' +
        long +
        ' rad: ' +
        rad,
    );

    const requestUrl = this.getUrl(lat, long, rad);
    this.logger.debug('send get request to: ' + requestUrl);
    const response = await this.httpService.axiosRef.get(requestUrl);

    this.logger.debug(
      'response status: ' +
        response.status +
        ' msg: ' +
        JSON.stringify(response.data),
      this.logger.log('end service getAllInRadius'),
    );
    return response.data;
  }

  getUrl(lat: number, long: number, rad: number) {
    return (
      this.TANKER_KOENIG_URL +
      '?lat=' +
      lat +
      '&lng=' +
      long +
      '&rad=' +
      rad +
      '&sort=' +
      this.SORT +
      '&type=' +
      this.GAS_TYPE +
      '&apikey=' +
      this.API_KEY
    );
  }
}
