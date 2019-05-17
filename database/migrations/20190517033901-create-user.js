'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(20),
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      mobile: {
        unique: true,
        type: Sequelize.STRING(11),
      },
      age: {
        type: Sequelize.STRING(3),
      },
      email: {
        type: Sequelize.STRING(50),
      },
      is_delete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
