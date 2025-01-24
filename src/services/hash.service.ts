import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  private readonly saltOrRounds = 12;

  async encrypt(password: string): Promise<string> {
    return Promise.resolve(bcrypt.hash(password, this.saltOrRounds));
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return Promise.resolve(bcrypt.compare(password, hash));
  }
}
