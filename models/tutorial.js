const Tutorial = (sequelize, Sequelize) => {
  const tutorialSchema = {
    title: Sequelize.STRING,
    description: Sequelize.STRING
  };

  return sequelize.define('tutorial', tutorialSchema);
};

module.exports = Tutorial;