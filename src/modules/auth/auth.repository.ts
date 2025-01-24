import { Injectable } from '@nestjs/common';
import { HashService } from 'src/services/hash.service';
import { JwtService } from 'src/services/jwt.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthRepository {
  constructor(
    private readonly hashService: HashService,
    private readonly jwtService: JwtService,
  ) {}

  async generateToken({ id, cpf, pixKey }) {
    const refreshToken = uuidv4();
    const envTokenSecret: any = process.env.ACCESS_TOKEN_SECRET;

    const accessToken = await this.jwtService.sign(
      { id, cpf, pixKey },
      envTokenSecret,
    );

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  async validatePassword({
    password,
    clientPassword,
  }: {
    password: string;
    clientPassword: string;
  }) {
    const validate = await this.hashService.compare(password, clientPassword);
    return validate;
  }
}
