import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CpfNormalize } from 'src/helpers/cpf-normalize';
import { PixKeyNormalize } from 'src/helpers/pixKey-normalize';

export class CreateClientDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @CpfNormalize()
  cpf: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @PixKeyNormalize()
  pixKey: string;
}
