import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  Unique,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  HasOne,
  ForeignKey,
} from 'sequelize-typescript';

@Table
export class Clients extends Model {
  @PrimaryKey
  @Unique
  @AutoIncrement
  @AllowNull(false)
  @Column
  id: number;

  @Column
  name: string;

  @Unique
  @AllowNull(false)
  @Column
  cpf: string;

  @Column
  password: string;

  @Column
  currencyAmount: number;

  @Unique
  @AllowNull(false)
  @Column
  pixKey: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt?: Date;

  @DeletedAt
  deletedAt?: Date;

  @HasOne(() => ClientsToken)
  clientToken: ClientsToken;
}

@Table
export class ClientsToken extends Model {
  @PrimaryKey
  @Unique
  @AutoIncrement
  @AllowNull(false)
  @Column
  id: number;

  @Unique
  @AllowNull(false)
  @Column
  token: string;

  @Unique
  @AllowNull(false)
  @ForeignKey(() => Clients)
  @Column
  clientId: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt?: Date;
}
