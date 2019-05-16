'use strict';

const Service = require('egg').Service;

class Users extends Service {
  async create(payload) {
    const { ctx, service } = this;

    const user = await service.users.findByTelephone(payload.telephone);
    if(user) {
      ctx.throw(404, "用户已存在")
    }

    payload.password = await ctx.genHash(payload.password);

    return ctx.model.Users.create(payload);
  }

  async find(id) {
    return this.ctx.model.Users.findByPk(id);
  }

  async findByTelephone(telephone) {
    return this.ctx.model.Users.findOne({
      where: { telephone }
    });
  }
}

module.exports = Users;
