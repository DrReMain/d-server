'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async t => {
      await Promise.all([

        queryInterface.addColumn(
          'users',
          'real_name',
          {
            type: Sequelize.STRING(30),
          },
          { transaction: t }
        ),

        queryInterface.addColumn(
          'users',
          'nick_name',
          {
            type: Sequelize.STRING(50),
          },
          { transaction: t }
        )

      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async t => {
      await Promise.all([
        queryInterface.removeColumn('users', 'real_name', { transaction: t }),
        queryInterface.removeColumn('users', 'nick_name', { transaction: t }),
      ]);
    });
  }
};
