const Tag = (sequelize, Sequelize) => {
  const tagSchema = {
    name: Sequelize.STRING
  };

  return sequelize.define('tag', tagSchema);
};

module.exports = Tag;