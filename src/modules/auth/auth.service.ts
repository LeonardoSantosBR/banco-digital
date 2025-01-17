import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { SigninAuthDto } from './dto/create-auth.dto';
import { ClientsRepository } from '../clients/clients.repository';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly clientsRepository: ClientsRepository,
    private readonly authRepository: AuthRepository,
  ) {}

  async signin(signinAuthDto: SigninAuthDto) {
    const { cpf, password } = signinAuthDto;

    const client = await this.clientsRepository.findOne({
      where: { cpf: cpf },
    });

    if (!client) throw new NotFoundException('Cliente não encontrado.');

    const isPasswordValid = await this.authRepository.validatePassword({
      password,
      clientPassword: client.password,
    });

    if (!isPasswordValid) throw new UnauthorizedException('Senha incorreta.');

    const { accessToken, refreshToken } =
      await this.authRepository.generateToken({
        id: client.id,
        cpf: client.cpf,
        pixKey: client.pixKey,
      });

    return {
      id: client.id,
      name: client.name,
      accessToken,
      refreshToken,
    };
  }
}
