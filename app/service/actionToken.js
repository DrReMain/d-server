'use strict';

const Service = require('egg').Service;

class ActionTokenService extends Service {
  async create({ id, username, mobile }) {
    const { ctx } = this;
    return ctx.app.jwt.sign(
      {
        data: { id, username, mobile },
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24), // 默认一天
      },
      ctx.app.config.jwt.secret
    );
  }
}

module.exports = ActionTokenService;
