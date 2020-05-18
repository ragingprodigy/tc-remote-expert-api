import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { get } from 'config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: get('DB_HOST'),
      synchronize: true,
      database: get('DB_DATABASE'),
      username: get('DB_USERNAME'),
      password: get('DB_PASSWORD'),
      autoLoadEntities: true,
      useUnifiedTopology: true,
      authSource: 'admin',
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
