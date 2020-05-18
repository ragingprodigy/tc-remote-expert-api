import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AzureBearerStrategy } from './strategies/azure-bearer.strategy';
import { AzureOIDCStrategy } from './strategies/azure-oidc.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'oauth-bearer' })],
  providers: [AzureBearerStrategy, AzureOIDCStrategy],
})
export class AuthModule {}
