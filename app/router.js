'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const url = `/api/${app.config.apiVersion}`;

  router.resources('users', `${url}/users`, controller.users);
};
