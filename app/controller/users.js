'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  constructor(ctx) {
    super(ctx);

    this.UserTransfer = {
      password: { type: 'password', required: true, allowEmpty: false, min: 8, max: 30 },
    };
  }
}

module.exports = UserController;
