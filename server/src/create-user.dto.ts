import { Type } from 'class-transformer';
import {
  IsInt,
  IsString,
  IsIn,
  Min,
  Max,
  IsDefined,
  IsOptional,
  MaxLength,
} from 'class-validator';

export class Config {
  @IsDefined()
  isAdmin: boolean;

  @IsOptional()
  @MaxLength(50)
  serverSideName?: string;
}

export class CreateUserDto {
  @IsDefined()
  @IsInt()
  @Min(10)
  id: number;

  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsIn(['F', 'M'])
  gender: 'F' | 'M';

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(120)
  age?: number;

  @Type(() => Config)
  accountConfig: Config;
}
