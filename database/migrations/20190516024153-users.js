'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const {INTEGER, DATE, STRING} = Sequelize;
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: INTEGER,
            },
            telephone: {
                allowNull: false,
                type: STRING(11),
            },
            password: {
                allowNull: false,
                type: STRING,
            },
            realName: {
                allowNull: true,
                type: STRING(30),
            },
            nickName:  {
                allowNull: true,
                type: STRING(30),
            },
            age: {
                allowNull: true,
                type: STRING(3),
            },
            email: {
                allowNull: true,
                type: STRING(50),
            },
            createdAt: {
                allowNull: false,
                type: DATE
            },
            updatedAt: {
                allowNull: false,
                type: DATE
            }
        })
    },

    down: async queryInterface => {
        await queryInterface.dropTable('users');
    }
};
