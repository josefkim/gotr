import { GasstationDto } from './gasstation-dto';

export class TankerkoenigResponseDto {
  readonly ok: string;
  readonly license: string;
  readonly data: string;
  readonly status: string;
  readonly stations: GasstationDto[];
}
