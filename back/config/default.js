/*
 * Default configuration file
 */

module.exports = {
  API_PREFIX: process.env.API_PREFIX || '/api/v1',
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  PORT: process.env.PORT || 3000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/altenEcom',
  jwt: {
    SECRET: process.env.JWT_SECRET || 'your_secret_key',
    TOKEN_EXPIRY_TIME: process.env.TOKEN_EXPIRY_TIME || '48h'
  }

}
