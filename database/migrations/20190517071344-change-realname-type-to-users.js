'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'users',
      'real_name',
      {
        type: Sequelize.STRING(50),
      },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'users',
      'real_name',
      {
        type: Sequelize.STRING(30),
      },
      {}
    );
  }
};
