import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Clients } from 'src/models/models';

@Injectable()
export class ClientsRepository {
  constructor(@InjectModel(Clients) private clientsModel: typeof Clients) {}

  async create(data) {
    const query = await this.clientsModel.create(data);
    return query;
  }

  async findAll(params) {
    const query = await this.clientsModel.findAll(params);
    return query;
  }

  async findOne(params) {
    const query = await this.clientsModel.findOne(params);
    return query;
  }

  async update(params, values) {
    const query = await this.clientsModel.update(values, { where: params });
    return query;
  }

  async delete(params) {
    const query = await this.clientsModel.destroy({ where: params });
    return query;
  }
}
