import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  async sign(data, envTokenSecret): Promise<string> {
    return Promise.resolve(
      jwt.sign(data, envTokenSecret, {
        expiresIn: '15m',
      }),
    );
  }
}
