import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AzureBearerGuard extends AuthGuard('oauth-bearer') {}
