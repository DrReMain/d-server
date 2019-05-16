'use strict';

module.exports = {
    up: async queryInterface => {
        await queryInterface.bulkInsert('users', [{
            telephone: '18606513270',
            password: 'kh6022363',
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },

    down: async queryInterface => {
        await queryInterface.bulkDelete('users', null, {});
    }
};
