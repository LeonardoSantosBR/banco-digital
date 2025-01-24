import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule } from './modules/clients/clients.module';
import { AuthModule } from './modules/auth/auth.module';
import { Clients } from './models/models';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      models: [Clients],
    }),
    ClientsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
