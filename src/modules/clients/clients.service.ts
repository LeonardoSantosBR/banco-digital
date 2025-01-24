import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsRepository } from './clients.repository';
import { HashService } from 'src/services/hash.service';

@Injectable()
export class ClientsService {
  constructor(
    private readonly clientsRepo: ClientsRepository,
    private readonly hashService: HashService,
  ) {}

  async create(createClientDto: CreateClientDto) {
    const { password, ...rest } = createClientDto;
    const hashPassword = await this.hashService.encrypt(password) 

    await this.clientsRepo.create({
      ...rest,
      password: hashPassword,
    });
  }

  async findAll(options) {
    await this.clientsRepo.findAll(options);
  }

  async findOne(id: number) {
    await this.clientsRepo.findOne(id);
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    await this.clientsRepo.update(id, updateClientDto);
  }

  async remove(id: number) {
    await this.clientsRepo.delete(id);
  }
}
