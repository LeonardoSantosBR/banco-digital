import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Clients } from 'src/models/models';
import { ClientsRepository } from './clients.repository';

@Module({
  imports: [SequelizeModule.forFeature([Clients])],
  controllers: [ClientsController],
  providers: [ClientsService, ClientsRepository],
  exports: [ClientsRepository],
})
export class ClientsModule {}
