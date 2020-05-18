import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities';

@Controller('users')
export class UsersController {
  constructor(private svc: UsersService) { }

  @Get()
  async all(): Promise<User[]> {
    return this.svc.findAll();
  }
}
