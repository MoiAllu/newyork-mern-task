import packageJson from '../package.json';

/**
 * Pattern for config is:
 * key: process.env['KEY'] ?? default
 */
const config = {
  version: packageJson.version,
  name: packageJson.name,
  description: packageJson.description,

  nodeEnv: process.env['NODE_ENV'] ?? 'development',
  port: process.env['PORT'] ?? 2000,

  clientCorsOrigins: {
    test: process.env['DEV_ORIGIN'] ?? '*',
    development: process.env['DEV_ORIGIN'] ?? '*',
    production: process.env['PROD_ORIGIN'] ?? 'none',
  },

  jwt_secret: process.env['JWT_SECRET'] ?? 'secret',
};

export default config;
