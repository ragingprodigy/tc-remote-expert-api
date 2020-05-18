import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { get } from 'config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: get('DB_DIALECT'),
      host: get('DB_HOST'),
      username: get('DB_USERNAME'),
      password: get('DB_PASSWORD'),
      synchronize: true,
      entities: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
