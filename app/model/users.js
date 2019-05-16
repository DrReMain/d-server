'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Users = app.model.define('users', {
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
  });

  Users.associate = function(models) {
    // associations can be defined here
  };

  return Users;
};
