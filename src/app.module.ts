import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { get } from 'config';
import { User } from './entities';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: get('DB_HOST'),
      synchronize: true,
      database: get('DB_DATABASE'),
      username: get('DB_USERNAME'),
      password: get('DB_PASSWORD'),
      entities: [User],
      useUnifiedTopology: true,
      authMechanism: '',
      authSource: 'admin',
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
