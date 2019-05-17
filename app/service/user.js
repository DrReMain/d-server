'use strict';

const Service = require('egg').Service;

class UserService extends Service {

  async create(payload) {
    const { ctx, service } = this;

    const user = await service.user.findByUsername(payload.username);
    if (user) {
      ctx.throw(404, '用户已存在');
    }

    const mobile = await service.user.findByMobile(payload.mobile);
    if (mobile) {
      ctx.throw(404, '该手机号已注册');
    }

    payload.password = await ctx.genHash(payload.password);

    return ctx.model.User.create(payload);
  }

  async login(payload) {
    const { ctx, service } = this;
    const user = await service.user.findByUsername(payload.username);
    if (!user || user.is_delete) {
      ctx.throw(404, '用户不存在');
    }
    const verifyPsw = await ctx.compare(payload.password, user.password);
    if (!verifyPsw) {
      ctx.throw(404, '密码不正确');
    }

    return await service.actionToken.create(user);
  }

  async show() {
    const { ctx, service } = this;
    const id = ctx.state.user.data.id;
    const user = await service.user.find(id);
    if (!user || user.is_delete) {
      ctx.throw(404, '用户不存在');
    }
    const { username, mobile, real_name, nick_name, age, email } = user;
    return { username, mobile, real_name, nick_name, age, email };
  }

  async update(payload) {
    const { ctx, service } = this;
    const id = ctx.state.user.data.id;
    const user = await service.user.find(id);
    if (!user || user.is_delete) {
      ctx.throw(404, '用户不存在');
    }
    const verifyPsw = await ctx.compare(payload.oldpassword, user.password);
    if (!verifyPsw) {
      ctx.throw(404, '原密码不正确');
    }
    payload.newpassword = await ctx.genHash(payload.newpassword);
    return user.update({ password: payload.newpassword });
  }

  async destroy(payload) {
    const { ctx, service } = this;
    const id = ctx.state.user.data.id;
    const user = await service.user.find(id);
    if (!user || user.is_delete) {
      ctx.throw(404, '用户不存在');
    }
    const verifyPsw = await ctx.compare(payload.password, user.password);
    if (!verifyPsw) {
      ctx.throw(404, '密码不正确');
    }
    return user.update({ is_delete: true });
  }

  // --------------------------------------------------------------
  // common
  async find(id) {
    return this.ctx.model.User.findByPk(id);
  }

  async findByUsername(username) {
    return this.ctx.model.User.findOne({
      where: { username }
    });
  }

  async findByMobile(mobile) {
    return this.ctx.model.User.findOne({
      where: { mobile }
    });
  }
}

module.exports = UserService;
