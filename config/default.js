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
};
