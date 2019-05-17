'use strict';

module.exports = app => {
  const { STRING, BOOLEAN } = app.Sequelize;

  const User = app.model.define('user', {
    username: {
      allowNull: false,
      unique: true,
      type: STRING(20),
    },
    password: {
      allowNull: false,
      type: STRING,
    },
    mobile: {
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
  });

  User.associate = function(models) {
    // associations can be defined here
  };

  return User;
};
