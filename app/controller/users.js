'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    constructor(ctx) {
        super(ctx);

        this.UserTransfer = {
            telephone: {type: 'string', required: true, allowEmpty: false, length: 11},
            password: {type: 'password', required: true, allowEmpty: false, min: 8, max: 30},
        };
    }

    // 新建账号
    async create() {
        const { ctx, service } = this;
        ctx.validate(this.UserTransfer);

        const payload = ctx.request.body || {};

        const data = await service.users.create(payload);

        ctx.helper.success({ ctx, data });
    }
}

module.exports = UserController;
