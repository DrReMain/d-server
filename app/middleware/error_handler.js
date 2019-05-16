'use strict';

module.exports = (option, app) => {
  return async function(ctx, next) {
    try {
      await next();
    } catch (e) {
      app.emit('error', e, this);
      const status = e.status || 500;
      const error_message = status === 500 && app.config.env === 'prod' ?
        'Internal Server Error' :
        e.message;

      const error = {
        message: error_message,
      };

      if (status === 422) {
        error.detail = e.errors;
      }


      ctx.body = error;
      ctx.status = status;
    }
  };
};
