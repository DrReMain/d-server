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
                unique: true,
                type: STRING(11),
            },
            password: {
                allowNull: false,
                type: STRING,
            },
            real_name: {
                type: STRING(30),
            },
            nick_name:  {
                type: STRING(30),
            },
            age: {
                type: STRING(3),
            },
            email: {
                type: STRING(50),
            },
            created_at: {
                allowNull: false,
                type: DATE,
                defaultValue: new Date()
            },
            updated_at: {
                allowNull: false,
                type: DATE,
                defaultValue: new Date()
            }
        })
    },

    down: async queryInterface => {
        await queryInterface.dropTable('users');
    }
};
