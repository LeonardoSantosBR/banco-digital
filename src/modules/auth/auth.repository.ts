import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthRepository {
  constructor() {}

  async generateToken({ id, cpf, pixKey }) {
    const refreshToken = uuidv4();
    const envTokenSecret: any = process.env.ACCESS_TOKEN_SECRET;

    const accessToken = jwt.sign({ id, cpf, pixKey }, envTokenSecret, {
      expiresIn: '15m',
    });

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
    const validate = await bcrypt.compare(password, clientPassword);
    return validate;
  }
}
