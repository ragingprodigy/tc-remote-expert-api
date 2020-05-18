import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { OIDCStrategy, IOIDCStrategyOption } from 'passport-azure-ad';
import { get } from 'config';

@Injectable()
export class AzureOIDCStrategy extends PassportStrategy(OIDCStrategy, 'oidc') {
  constructor() {
    const options: IOIDCStrategyOption = {
      identityMetadata: `https://login.microsoftonline.com/${get(
        'AZURE_TENANT_ID',
      )}/.well-known/openid-configuration`,
      clientID: get('AZURE_CLIENT_ID'),
      loggingLevel: 'info',
      responseType: 'id_token code',
      responseMode: 'query',
      redirectUrl: 'http://localhost:8000',
      allowHttpForRedirectUrl: true,
    };

    super(options);
  }

  async validate(iss, sub, profile, accessToken, refreshToken, done) {
    console.log(
      '[AzureOIDCStrategy: validate()]',
      iss,
      sub,
      profile,
      accessToken,
      refreshToken,
    );
    // Auto register, and return
    return done(null, {});
  }
}

