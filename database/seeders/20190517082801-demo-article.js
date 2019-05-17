'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'articles',
      [{
        user_id: 1,
        title: 'demo1',
        content: '<h1>demo1demo1demo1demo1demo1demo1demo1demo1</h1>',
        created_at: new Date('2019/2/1'),
        updated_at: new Date(),
      }, {
        user_id: 1,
        title: 'demo2',
        content: '<h2>How old are you?</h2>',
        created_at: new Date('2019/2/1'),
        updated_at: new Date(),
      }],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      'articles',
      null,
      {}
    );
  }
};
