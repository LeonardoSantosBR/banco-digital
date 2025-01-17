import { IsNotEmpty, IsString } from 'class-validator';

export class SigninAuthDto {
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
