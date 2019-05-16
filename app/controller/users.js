'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  constructor(ctx) {
    super(ctx);

    this.UserRegisterTransfer = {
      username: { type: 'string', required: true, allowEmpty: false, min: 6, max: 20 },
      password: { type: 'password', required: true, allowEmpty: false, min: 8, max: 30 },
      telephone: { type: 'string', required: false, min: 11, max: 11 },
      real_name: { type: 'string', required: false, max: 30 },
      nick_name: { type: 'string', required: false, max: 30 },
      age: { type: 'number', required: false, min: 0, max: 250 },
      email: { type: 'email', required: false, allowEmpty: true },
      is_delete: { type: 'boolean', required: false }
    };

    this.UserLoginTransfer = {
      username: { type: 'string', required: true, allowEmpty: false, min: 6, max: 20 },
      password: { type: 'password', required: true, allowEmpty: false, min: 8, max: 30 },
    };

    this.UserDestroyTransfer = {
      password: { type: 'password', required: true, allowEmpty: false, min: 8, max: 30 },
    };

    this.UserUpdateTransfer = {
      oldpassword: { type: 'password', required: true, allowEmpty: false, min: 8, max: 30 },
      newpassword: { type: 'password', required: true, allowEmpty: false, min: 8, max: 30 },
    };
  }

  // 新建账号
  async register() {
    const { ctx, service } = this;
    ctx.validate(this.UserRegisterTransfer);

    const payload = ctx.request.body || {};

    const data = await service.users.create(payload);

    ctx.helper.success({ ctx, data });
  }

  // 登录
  async login() {
    const { ctx, service } = this;
    ctx.validate(this.UserLoginTransfer);
    const payload = ctx.request.body || {};
    const data = await service.users.login(payload);
    ctx.helper.success({ ctx, data });
  }

  // --------------------------------------------------------------
  // 需要 token
  async index() {
    const { ctx, service } = this;
    const data = await service.users.show();
    ctx.helper.success({ ctx, data });
  }

  async update() {
    const { ctx, service } = this;
    ctx.validate(this.UserUpdateTransfer);
    const payload = ctx.request.body || {};

    const data = await service.users.update(payload);
    ctx.helper.success({ ctx, data: null });
  }

  async destroy() {
    const { ctx, service } = this;
    ctx.validate(this.UserDestroyTransfer);
    const payload = ctx.request.body || {};

    const data = await service.users.destroy(payload);
    ctx.helper.success({ ctx, data: null });
  }
}

module.exports = UserController;
