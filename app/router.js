'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const url = `/api/${app.config.apiVersion}`;

  router.post(`${url}/user/register`, controller.user.register);
  router.post(`${url}/user/login`, controller.user.login);
  router.resources('users', `${url}/user`, app.jwt, controller.user);
};
