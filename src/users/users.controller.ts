import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities';
import { AzureBearerGuard } from 'src/auth/guards/azure-bearer.guard';

@UseGuards(AzureBearerGuard)
@Controller('users')
export class UsersController {
  constructor(private svc: UsersService) {}

  @Get()
  async all(): Promise<User[]> {
    return this.svc.findAll();
  }
}
