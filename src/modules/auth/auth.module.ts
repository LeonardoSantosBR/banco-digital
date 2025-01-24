import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Clients } from 'src/models/models';
import { ClientsModule } from '../clients/clients.module';
import { AuthRepository } from './auth.repository';
import { HashService } from 'src/services/hash.service';
import { JwtService } from 'src/services/jwt.service';

@Module({
  imports: [SequelizeModule.forFeature([Clients]), ClientsModule],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, HashService, JwtService],
})
export class AuthModule {}
