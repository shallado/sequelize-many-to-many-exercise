const { Tutorial, Tag } = require('../models');

exports.createTutorial = (tutorialInfo) => {
  return Tutorial.create(tutorialInfo)
    .then((tutorial) => ({
      message: 'Successfully create tutorial',
      data: tutorial.get()
    }))
    .catch(() => console.log('Error while creating a tutorial', err));
};

exports.findAllTutorials = () => {
  return Tutorial.findAll({ 
    include: {
      model: Tag,
      as: 'tags'
    } 
  })
    .then((tutorials) => {
      if (tutorials.length === 0) {
        console.log('Unable to find any tutorials');
      }

      return tutorials.map((tutorial) => tutorial.get());
    })
    .catch((err) => console.log('Error finding tutorials'));
};

exports.findTutorial = (tutorialId) => {
  return Tutorial.findByPk(tutorialId, {
    include: [{
      model: Tag,
      as: 'tags'
    }]
  })
    .then((tutorial) => {
      if (!tutorial) {
        console.log('Unable to find a tutorial');
      }

      return tutorial.toJSON();
    })
    .catch((err) => console.log('Error finding a tutorial', err));
};