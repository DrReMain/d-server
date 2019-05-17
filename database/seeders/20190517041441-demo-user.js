'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [{
        username: 'root',
        password: '$2a$10$wdUxHXvDUf.JY1MQeRysBe.qFA3M71zq87Qwb5HoJv5sWhL59RrGS',
        mobile: '13888888888',
        real_name: 'real_name',
        nick_name: 'nick_name',
        age: 18,
        email: 'root@example.com',
        is_delete: false,
        created_at: new Date('2019/1/1'),
        updated_at: new Date(),
      }],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      'users',
      null,
      {}
    );
  }
};
