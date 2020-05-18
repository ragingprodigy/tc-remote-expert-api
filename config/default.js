require('dotenv').config();
const env = process.env;

module.exports = {
  APP_NAME: env.APP_NAME || 'Remote Expert API',
  PORT: +env.PORT || 8000,
  NODE_ENV: env.NODE_ENV || 'development',
  DB_DIALECT: env.DB_DIALECT || 'mongodb',
  DB_HOST: env.DB_HOST || '127.0.0.1',
  DB_DATABASE: env.DB_DATABASE || 'remote_expert',
  DB_USERNAME: env.DB_USERNAME || 'root',
  DB_PASSWORD: env.DB_PASSWORD || 'rootpass',
  DB_PORT: +env.DB_PORT || 27017,
  APP_VERSION: '0.0.1',
  AZURE_TENANT_ID:
    env.AZURE_TENANT_ID || '872c5047-fb6d-4fc2-b81b-f01f82b4a017',
  AZURE_CLIENT_ID:
    env.AZURE_CLIENT_ID || 'd947f78a-4914-4491-b980-a6554a967989',
  AZURE_OBJECT_ID:
    env.AZURE_OBJECT_ID || '2552999a-2e68-4232-903a-826e6c000876',
};
