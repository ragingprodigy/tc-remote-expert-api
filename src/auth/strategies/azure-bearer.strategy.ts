/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BearerStrategy } from 'passport-azure-ad';
import { get } from 'config';

@Injectable()
export class AzureBearerStrategy extends PassportStrategy(
  BearerStrategy,
  'oauth-bearer',
) {
  constructor() {
    super({
      identityMetadata: `https://login.microsoftonline.com/${get(
        'AZURE_TENANT_ID',
      )}/.well-known/openid-configuration`,
      clientID: get('AZURE_CLIENT_ID'),
      loggingLevel: 'info',
    });
  }

  async validate(response: any) {
    console.log('Azure validate response: ', response);
    const { unique_name }: { unique_name: string } = response;
    if (unique_name) return unique_name;
    else return null;
  }
}
