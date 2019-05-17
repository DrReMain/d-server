'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + 'dr.remain';
  config.middleware = [ 'errorHandler' ];

  const userConfig = {
    apiVersion: 'v1',
    security: {
      csrf: {
        enable: false,
      },
      // domainWhiteList: [ '0.0.0.0' ],
    },
    bodyParser: {
      enableTypes: [ 'json', 'form', 'text' ],
    },
    onerror: {
      json(e, ctx) {
        const status = e.status || 500;
        ctx.body = {
          message: 'Internal Server Error',
        };
        ctx.status = status;
      },
    },

    sequelize: {
      dialect: 'postgres',
      database: 'd-server-dev',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123123',
      define: {
        freezeTableName: false,
        underscored: true,
      },
    },

    multipart: {
      fileExtensions: [
        '.txt',
      ],
    },

    bcrypt: {
      saltRounds: 10, // default 10
    },

    jwt: {
      secret: 'dr.remain',
      enable: true,
      property: 'user',
      ignore: '/',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
