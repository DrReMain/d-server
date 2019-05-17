'use strict';

module.exports = app => {
  const { STRING, TEXT, INTEGER } = app.Sequelize;

  const Article = app.model.define(
    'article',
    {
      user_id: INTEGER,
      title: STRING(200),
      content: TEXT,
    },
    {}
  );
  Article.associate = function() {
    this.belongsTo(app.model.User, {
      // as: 'user',
      foreignKey: 'user_id',
      // targetKey: 'id'
    });
  };

  return Article;
};
