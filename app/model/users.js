'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;

  const Users = app.model.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    username: {
      allowNull: false,
      unique: true,
      type: STRING(20),
    },
    password: {
      allowNull: false,
      type: STRING,
    },
    telephone: {
      unique: true,
      type: STRING(11),
    },
    real_name: {
      type: STRING(30),
    },
    nick_name: {
      type: STRING(30),
    },
    age: {
      type: STRING(3),
    },
    email: {
      type: STRING(50),
    },
    is_delete: {
      type: BOOLEAN,
      defaultValue: false,
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
  });

  Users.associate = function(models) {
    // associations can be defined here
  };

  return Users;
};
