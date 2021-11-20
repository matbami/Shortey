const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Url shortener API documentation',
    version,
    license: {
      name: 'Adeleke Ayobami',
      url: 'https://github.com/matbami/Spleet-Coding-Assessment',
    },
  },
  servers: [
    {
      url: config.env === 'production' ? `${config.domain}` : `http://localhost:${config.port}`,
    },
  ],
};

module.exports = swaggerDef;
