import { IsNotEmpty, IsString } from 'class-validator';
import { CpfNormalize } from 'src/helpers/cpf-normalize';

export class SigninAuthDto {
  @IsString()
  @IsNotEmpty()
  @CpfNormalize()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
