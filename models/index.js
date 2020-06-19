const Sequelize = require('sequelize');
const tag = require('./tag');
const tutorial = require('./tutorial');
const {
  database,
  username,
  password,
  host,
  dialect
} = require('../config/db');

const sequelize = new Sequelize(database, username, password, {
  host: 'localhost',
  logging: false,
  define: {
    underscored: true
  },
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Successfully connected to the database'))
  .catch((err) => console.log('Unable to connect to the database', err));

const Tag = tag(sequelize, Sequelize);
const Tutorial = tutorial(sequelize, Sequelize);

Tutorial.belongsToMany(Tag, { 
  as: 'tags', 
  through: 'tutorial_tag'
})

Tag.belongsToMany(Tutorial, { 
  as: 'tutorials', 
  through: 'tutorial_tag',
})

module.exports = {
  Tag,
  Tutorial,
  sequelize,
  Sequelize
};