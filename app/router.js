'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const url = `/api/${app.config.apiVersion}`;

  router.post(`${url}/users/register`, controller.users.register);
  router.post(`${url}/users/login`, controller.users.login);
  router.resources('users', `${url}/users`, app.jwt, controller.users);
};
