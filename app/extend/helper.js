'use strict';

module.exports = {
  parseInt(string) {
    if (typeof string === 'number') return string;
    if (!string) return string;
    return parseInt(string) || 0;
  },

  success({ ctx, data = null, message = 'success' }) {
    // status === 200
    ctx.body = {
      data,
      message,
    };
    ctx.status = 200;
  },
};
